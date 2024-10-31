import { InputType } from './model/model';
import classNames from 'classnames';

export const Input = ({
  placeholder,
  type,
  className,
  ...props
}: InputType) => {
  return (
    <input
      {...props}
      type={type}
      placeholder={placeholder}
      className={classNames(
        className,
        'w-full h-[46px] text-[18px] leading-[46px] rounded-[30px] px-5 py-[10px]'
      )}
    />
  );
};
