import { useTranslation } from 'react-i18next';

export type AuthType = {
  name?: string;
  email: string;
  password: string;
};

export enum FormType {
  LOGIN = 'login',
  SIGNUP = 'signUp',
}

export type AuthFormType = {
  formType: FormType;
};

export const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const useSignUpFormComponents = () => {
  const { t } = useTranslation();
  return {
    title: t('formAuth.signUp.title'),
    subTitleText: t('formAuth.signUp.subTitleText'),
    description: t('formAuth.signUp.description'),
    button: t('formAuth.signUp.button'),
  };
};

export const useLoginFormComponents = () => {
  const { t } = useTranslation();
  return {
    title: t('formAuth.login.title'),
    subTitleText: t('formAuth.login.subTitleText'),
    description: t('formAuth.login.description'),
    button: t('formAuth.login.button'),
  };
};
