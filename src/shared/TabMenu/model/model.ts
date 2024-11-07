export type TabMenuType = {
  items: string[];
  selectedItem: string;
  onSelect: (item: string) => void;
  variant?: TabMenuVariant;
};

export enum TabMenuVariant {
  default = 'default',
  green = 'green',
}
