export type TabMenuType = {
  items: string[];
  selectedItem: string;
  onSelect: (item: string) => void;
};
