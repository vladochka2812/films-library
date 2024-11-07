import { routes } from '@/app/routes/routes';
import { AuthForm } from '@/widgets/Auth/AuthForm';
import { FormType } from '@/widgets/Auth/model/model';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { BenefitsList } from './ui/BenefitsList';

const Auth = () => {
  const { pathname } = useLocation();

  const formType = useMemo(() => {
    return pathname === routes.login ? FormType.LOGIN : FormType.SIGNUP;
  }, [pathname]);

  return (
    <div className="flex flex-col lg:flex-row items-start lg:px-5 lg:mt-6 mt-16 my-5">
      {pathname === routes.signUp && <BenefitsList />}
      <div className="pl-[30px] mt-5 lg:mt-0 px-5">
        <AuthForm formType={formType} />
      </div>
    </div>
  );
};

export default Auth;
