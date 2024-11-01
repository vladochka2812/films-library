type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export type TooltipType = {
  position: TooltipPosition;
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};
