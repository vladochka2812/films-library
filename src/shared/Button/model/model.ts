type buttonTypes = 'button' | 'reset' | 'submit';

export type ButtonType = {
  children: React.ReactNode;
  type?: buttonTypes;
  className?: string;
};
