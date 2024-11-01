import { emailValidation } from './model';

export const validatePassword = (password: string): string | undefined => {
  if (!password) {
    return 'Password is required';
  } else if (password.length < 6) {
    return 'Password is too short';
  }
  return undefined;
};

export const validateEmail = (email: string): string | undefined => {
  if (!email) {
    return 'Email is required';
  } else if (!emailValidation.test(email)) {
    return 'Invalid email address';
  }
  return undefined;
};

export const validateName = (name: string): string | undefined => {
  if (!name) {
    return 'Name is required';
  }
  return undefined;
};
