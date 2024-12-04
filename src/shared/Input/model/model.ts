export enum VariantType {
  DEFAULT = 'default',
  ROUNDED = 'rounded',
}

export type InputType = {
  placeholder: string;
  type: string;
  className?: string;
  variant?: VariantType;
};

export type DateInputType = {
  changeEventHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
