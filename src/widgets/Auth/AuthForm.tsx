import {
  AuthFormType,
  AuthType,
  FormType,
  loginFormComponents,
  signUpFormComponents,
} from './model/model';
import { Formik, Form, Field } from 'formik';
import {
  validateEmail,
  validateName,
  validatePassword,
} from './model/validation';
import { useMemo } from 'react';
import { useAuth } from './api/useAuth';
import { Link } from 'react-router-dom';
import { routes } from '@/app/routes/routes';
import { ErrorMessage } from '@/shared/ErrorMessage/ErrorMessage';
import { Input } from '@/shared/Input/Input';
import { Button } from '@/shared/Button/Button';

export const AuthForm = ({ formType }: AuthFormType) => {
  const { sign } = useAuth({ formType });
  const initialValues: AuthType = { email: '', password: '', name: '' };

  const cacheFormText = useMemo(() => {
    return formType === 'login' ? loginFormComponents : signUpFormComponents;
  }, [formType]);

  const validate = (values: AuthType) => {
    const errors: Partial<AuthType> = {};

    const nameError = validateName(values.name ? values.name : ' ');
    if (nameError) {
      errors.name = nameError;
    }

    const emailError = validateEmail(values.email);
    if (emailError) {
      errors.email = emailError;
    }

    const passwordError = validatePassword(values.password);
    if (passwordError) {
      errors.password = passwordError;
    }
    return errors;
  };

  return (
    <div className="flex flex-col w-full">
      <h2 className="font-bold text-nowrap text-[24px]">
        {cacheFormText.title}
      </h2>
      <p className="mt-2.5 text-[16px]">{cacheFormText.subTitleText}</p>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values) => {
          sign(values);
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <div className="flex flex-col mt-2.5 ">
              {formType === FormType.SIGNUP && (
                <label className="mt-4" htmlFor="name">
                  <span>Username</span>
                  <Field
                    id="name"
                    name="name"
                    as={Input}
                    placeholder=""
                    type="text"
                  />
                  {errors.name && touched.name && (
                    <ErrorMessage className="ml-4">{errors.name}</ErrorMessage>
                  )}
                </label>
              )}
              <label className="mt-4" htmlFor="name">
                <span>Password (6 characters minimum)</span>
                <Field
                  id="password"
                  name="password"
                  as={Input}
                  placeholder=""
                  type="password"
                />
                {errors.password && touched.password && (
                  <ErrorMessage className="ml-4">
                    {errors.password}
                  </ErrorMessage>
                )}
              </label>
              <label className="mt-4" htmlFor="name">
                <span>Email</span>
                <Field
                  id="email"
                  name="email"
                  as={Input}
                  placeholder=""
                  type="email"
                />
                {errors.email && touched.email && (
                  <ErrorMessage className="ml-4">{errors.email}</ErrorMessage>
                )}
              </label>
            </div>
            <p className="mt-[30px] text-[14px] font-light">
              {cacheFormText?.description}
            </p>
            <div className="flex items-center max-w-[150px] mt-[20px]">
              <Button
                type="submit"
                className="my-4"
                disabled={!isValid || !dirty}
              >
                {cacheFormText.button}
              </Button>
              <Link className="ml-2.5 text-lightBlue" to={routes.home}>
                Cancel
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
