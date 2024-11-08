import { useState } from 'react';
import { Tooltip } from '../../../../shared/Tooltip/Tooltip';

export const LanguageButton = () => {
  const [currentLanguage, setCurrentLanguage] = useState(Lan); 

  const toggleLanguage = () => {
    setCurrentLanguage((prevLang) => (prevLang === 'en' ? 'ua' : 'en'));
  };

  return (
    <Tooltip
      position="bottom"
      content={
        <div className="w-[180px] text-[16px] p-[10px]">
          <span>
            {currentLanguage === 'en' ? languageList.ua : languageList.en}
          </span>
        </div>
      }
    >
      <div
        className="flex justify-center items-center border-white py-[3px] px-[5px] border rounded-[3px] font-semibold text-[14px] text-white w-7 h-[26px] hover:text-darkBlue hover:bg-white"
        onClick={toggleLanguage}
      >
        {languageList[currentLanguage]}
      </div>
    </Tooltip>
  );
};
