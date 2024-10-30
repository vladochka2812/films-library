import { useState } from 'react';
import { AccordionType } from './model/modes';

export const Accordion = ({ trigger, children, className }: AccordionType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      <div>
        <div onClick={handleToggle} className="cursor-pointer">
          {trigger}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[200px]' : 'max-h-0'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
