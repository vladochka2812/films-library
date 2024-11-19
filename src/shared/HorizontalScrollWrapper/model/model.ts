export type HorizontalScrollWrapperType = {
  bgImage?: string;
  children: React.ReactNode;
  variant?: HorizontalScrollWrapperVariant;
  setCurrentScroll?: (position: number) => void;
  className?: string;
};

export enum HorizontalScrollWrapperVariant {
  default = 'default',
  shadow = 'shadow',
  simple = 'simple',
}
