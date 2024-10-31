import { signOut } from 'firebase/auth';
import { auth } from '../AuthFirebase/firebaseConfig';
import { handleDeleteAccessToken } from '../AuthFirebase/accessToken';

export const useLogout = () => {
  const logout = async () => {
    await signOut(auth);
    handleDeleteAccessToken();
  };
  return { logout };
};
