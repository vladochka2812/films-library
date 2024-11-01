import classNames from 'classnames';

export const ErrorMessage = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        className,
        'text-red-500 font-semibold text-[12px]'
      )}
    >
      {children}
    </div>
  );
};
