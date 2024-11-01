export type AuthType = {
  name?: string;
  email: string;
  password: string;
};

export enum FormType {
  LOGIN = 'login',
  REGISTER = 'register',
}

export type AuthFormType = {
  formType: FormType;
};

export const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const signUpFormComponents = {
  title: 'Create account',
  description: 'Already have an account',
  button: 'Register',
};

export const signInFormComponents = {
  title: 'Login to your account',
  description: "Don't have an account?",
  button: 'Login',
};
