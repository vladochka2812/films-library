import { emailValidation } from './model';

export const validatePassword = (
  password: string,
  t: (key: string) => string
): string | undefined => {
  if (!password) {
    return t('errors.noPassword');
  } else if (password.length < 6) {
    return t('errors.toShortPassword');
  }
  return undefined;
};

export const validateEmail = (
  email: string,
  t: (key: string) => string
): string | undefined => {
  if (!email) {
    return t('errors.noEmail');
  } else if (!emailValidation.test(email)) {
    return t('errors.emailInvalid');
  }
  return undefined;
};

export const validateName = (
  name: string,
  t: (key: string) => string
): string | undefined => {
  if (!name) {
    return t('errors.noName');
  }
  return undefined;
};
