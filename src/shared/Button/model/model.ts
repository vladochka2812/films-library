type buttonTypes = 'button' | 'reset' | 'submit';

export type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  type?: buttonTypes;
  className?: string;
};
