import classNames from 'classnames';
import { ButtonType, VariantType } from './model/model';

export const Button = ({
  children,
  className,
  type = 'button',
  variant = VariantType.DEFAULT,
  ...props
}: ButtonType) => {
  return (
    <button
      type={type}
      {...props}
      className={classNames(
        className,
        'flex justify-center items-center cursor-pointer font-semibold disabled:cursor-not-allowed text-white',
        {
          'text-[18px] hover:text-darkBlue h-[46px] leading-[46px] rounded-[30px] px-5 py-[10px] bg-gradient-to-r from-[lightGreen] to-[lightBlue]':
            variant === VariantType.ROUNDED,
          'text-[16px] rounded-md bg-lightBlue py-1.5 hover:bg-darkBlue':
            variant === VariantType.DEFAULT,
        }
      )}
    >
      {children}
    </button>
  );
};
