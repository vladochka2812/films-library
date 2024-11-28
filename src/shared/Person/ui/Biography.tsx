import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

export const Biography = ({ text }: { text: string }) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const maxTextLength = 250;

  const sliceText =
    text?.length > maxTextLength ? text?.slice(0, maxTextLength) + '...' : text;

  const lastLine = text?.slice(maxTextLength, maxTextLength + 100) + '...';

  return (
    <div className="mt-[30px]">
      <h3 className="text-[1.3rem] font-semibold mb-2">
        {t('person.biography')}
      </h3>
      <p className="text-[1rem] leading-[22px]">
        {isExpanded ? text : sliceText}
      </p>

      {text?.length > maxTextLength && !isExpanded && (
        <div className="flex justify-between">
          <p className="bg-gradient-to-r from-black/80 to-black/20 text-transparent bg-clip-text">
            {lastLine}
          </p>
          <button
            onClick={toggleReadMore}
            className="text-lightBlue hover:text-lightGreen text-nowrap font-semibold text-[16px] flex items-center gap-2"
          >
            {t('person.readMore')}
            <IoIosArrowForward />
          </button>
        </div>
      )}
    </div>
  );
};
