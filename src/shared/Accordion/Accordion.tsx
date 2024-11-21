import { useState } from 'react';
import { AccordionType } from './model/modes';
import classNames from 'classnames';

export const Accordion = ({
  trigger,
  children,
  className,
  handleClick,
}: AccordionType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    handleClick && !isOpen && handleClick();
  };

  return (
    <div className={classNames('w-full', className)}>
      <div>
        <div onClick={handleToggle} className="cursor-pointer">
          {trigger}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 w-full ${
            isOpen ? 'h-full' : 'max-h-0'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
