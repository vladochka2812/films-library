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

export const signUpFormComponents = {
  title: 'Sign up for an account',
  subTitleText:
    'Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.',
  description:
    'By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.',
  button: 'Sign Up',
};

export const loginFormComponents = {
  title: 'Login to your account',
  subTitleText:
    'In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple.',
  description: '',
  button: 'Login',
};
