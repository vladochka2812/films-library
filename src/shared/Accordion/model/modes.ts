export type AccordionType = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className: string;
  handleClick?: () => void;
};
