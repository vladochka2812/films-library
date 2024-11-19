export type TabMenuType = {
  items: string[];
  selectedItem: string;
  onSelect: (item: string) => void;
  variant?: TabMenuVariant;
  afterContent?: string[];
  title?: string;
};

export enum TabMenuVariant {
  default = 'default',
  green = 'green',
  simple = 'simple',
}
