import { Tooltip } from '@/shared/Tooltip/Tooltip';
import { useState, useEffect } from 'react';
import { languageList } from '../../model/model';
import { useTranslation } from 'react-i18next';

export const LanguageButton = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang =
      currentLanguage === languageList.en ? languageList.ua : languageList.en;
    setCurrentLanguage(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <Tooltip
      position="bottom"
      content={
        <div className="text-[16px] text-center px-5">
          <span onClick={toggleLanguage}>
            {currentLanguage === languageList.en
              ? languageList.ua
              : languageList.en}
          </span>
        </div>
      }
    >
      <div className="flex justify-center items-center border-white py-[3px] px-[5px] border rounded-[3px] font-semibold text-[14px] text-white w-7 h-[26px] hover:text-darkBlue hover:bg-white">
        {currentLanguage}
      </div>
    </Tooltip>
  );
};
