type buttonTypes = 'button' | 'reset' | 'submit';

export enum VariantType {
  DEFAULT = 'default',
  ROUNDED = 'rounded',
  PAGINATION = 'pagination',
}

export type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  type?: buttonTypes;
  className?: string;
  variant?: VariantType;
};
