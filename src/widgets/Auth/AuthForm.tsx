import {
  AuthFormType,
  AuthType,
  signInFormComponents,
  signUpFormComponents,
} from './model/model';
import { Formik, Form, Field } from 'formik';
import { Input } from '../../shared/Input/Input';
import { Button } from '../../shared/Button/Button';
import { ErrorMessage } from '../../shared/ErrorMessage/ErrorMessage';
import {
  validateEmail,
  validateName,
  validatePassword,
} from './model/validation';
import { useMemo } from 'react';
import { useAuth } from './api/useAuth';

export const AuthForm = ({ formType }: AuthFormType) => {
  const { sign } = useAuth({ formType });
  const initialValues: AuthType = { email: '', password: '', name: '' };

  const cacheFormText = useMemo(() => {
    return formType === 'login' ? signInFormComponents : signUpFormComponents;
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
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[28px] font-semibold text-nowrap my-3">
        {cacheFormText.title}
      </h1>

      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values) => {
          sign(values);
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <div className="flex flex-col gap-5 w-full">
              {formType === 'register' && (
                <div>
                  <Field
                    id="name"
                    name="name"
                    as={Input}
                    className="shadow-md"
                    placeholder="Enter your name"
                    type="text"
                  />
                  {errors.name && touched.name && (
                    <ErrorMessage className="ml-4">{errors.name}</ErrorMessage>
                  )}
                </div>
              )}
              <div>
                <Field
                  id="email"
                  name="email"
                  as={Input}
                  className="shadow-md"
                  placeholder="Enter your email"
                  type="email"
                />
                {errors.email && touched.email && (
                  <ErrorMessage className="ml-4">{errors.email}</ErrorMessage>
                )}
              </div>
              <div>
                <Field
                  id="password"
                  name="password"
                  as={Input}
                  className="shadow-md"
                  placeholder="Enter your password"
                  type="password"
                />
                {errors.password && touched.password && (
                  <ErrorMessage className="ml-4">
                    {errors.password}
                  </ErrorMessage>
                )}
              </div>
            </div>
            <div className="text-center text-[14px] font-light hover:underline">
              {cacheFormText.description}
            </div>
            <Button
              type="submit"
              className="my-4"
              disabled={!isValid || !dirty}
            >
              {cacheFormText.button}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
