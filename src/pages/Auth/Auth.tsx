import { useMemo } from 'react';
import { AuthForm } from '../../widgets/Auth/AuthForm';
import { FormType } from '../../widgets/Auth/model/model';
import { useLocation } from 'react-router-dom';
import { routes } from '../../app/routes/routes';
import { BenefitsList } from './ui/BenefitsList';

const Auth = () => {
  const { pathname } = useLocation();

  const formType = useMemo(() => {
    return pathname === routes.login ? FormType.LOGIN : FormType.SIGNUP;
  }, [pathname]);

  return (
    <div className="flex flex-col md:flex-row items-start md:px-5 ">
      {pathname === routes.signUp && <BenefitsList />}
      <div className="pl-[30px] mt-5 md:mt-0 px-5">
        <AuthForm formType={formType} />
      </div>
    </div>
  );
};

export default Auth;
