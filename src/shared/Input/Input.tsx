import { InputType, VariantType } from './model/model';
import classNames from 'classnames';

export const Input = ({
  placeholder,
  type,
  className,
  variant = VariantType.DEFAULT,
  ...props
}: InputType) => {
  return (
    <input
      {...props}
      type={type}
      placeholder={placeholder}
      className={classNames(className, 'w-full', {
        'h-[46px] text-[18px] leading-[46px] rounded-[30px] px-5 py-[10px]':
          variant === VariantType.ROUNDED,
        'py-1.5 px-3 border rounded-md': variant === VariantType.DEFAULT,
      })}
    />
  );
};
