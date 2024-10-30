import classNames from 'classnames';
import { ButtonType } from './model/model';

export const Button = ({
  children,
  className,
  type = 'button',
  ...props
}: ButtonType) => {
  return (
    <button
      type={type}
      {...props}
      className={classNames(
        className,
        'flex justify-center items-center text-white hover:text-darkBlue font-semibold w-full h-[46px] text-[18px] leading-[46px] rounded-[30px] px-5 py-[10px] bg-gradient-to-r from-[lightGreen] to-[lightBlue]'
      )}
    >
      {children}
    </button>
  );
};
