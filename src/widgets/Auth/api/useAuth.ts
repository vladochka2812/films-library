import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { AuthFormType, AuthType } from '../model/model';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { handleSaveAccessToken } from '@/features/AuthFirebase/accessToken';
import { auth, db } from '@/features/AuthFirebase/firebaseConfig';

export const useAuth = ({ formType }: AuthFormType) => {
  const registrateUser = async ({ email, password, name }: AuthType) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        await setDoc(doc(db, 'Users', userCredential.user.uid), {
          email: email,
          name: name,
        });
      }
      const token = await userCredential.user.getIdToken();
      if (name) {
        handleSaveAccessToken({ token, name });
      }
    } catch (error) {
      console.error("Error in user's auth", (error as Error).message);
    }
  };

  const loginUser = async ({ email, password }: AuthType) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();
      const docRef = doc(db, 'Users', userCredential.user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.data()) {
        const name = docSnap.data()?.name;
        handleSaveAccessToken({ token, name });
      }
    } catch (error) {
      console.error("Error in user's auth", (error as Error).message);
    }
  };

  return formType === 'login' ? { sign: loginUser } : { sign: registrateUser };
};
