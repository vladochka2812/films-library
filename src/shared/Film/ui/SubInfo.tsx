import { FaLink } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { SubInfoType } from '../model/model';
import { useState } from 'react';
import classNames from 'classnames';

export const SubInfo = ({
  homepage,
  revenue,
  status,
  budget,
  language,
  network,
  type,
}: SubInfoType) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center px-10 py-[30px] max-w-[1400px] lg:gap-20 md:gap-16 sm:gap-8 gap-4 border-b">
      {homepage && (
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a href={homepage} target="_blank">
            <FaLink size={40} />
          </a>
          <span
            className={classNames(
              `absolute top-8 left-[calc(50%-4px)] w-[10px] h-[10px] rotate-45 bg-white`,
              {
                'inline-block': isHovered,
                hidden: !isHovered,
              }
            )}
          ></span>
          {isHovered && (
            <div className="absolute top-10 text-center bg-white px-2 py-1 border rounded shadow-md text-[16px] text-nowrap p-2 font-medium">
              {t('FilmPage.visit')}
            </div>
          )}
        </div>
      )}

      <div>
        <h4 className="font-bold text-[18px]">{t('FilmPage.status')}</h4>
        <span>{status}</span>
      </div>
      <div>
        <h4 className="font-bold text-[18px]">{t('FilmPage.language')}</h4>
        <span>{language}</span>
      </div>
      {budget && (
        <div>
          <h4 className="font-bold text-[18px]">{t('FilmPage.budget')}</h4>
          <span>{budget}</span>
        </div>
      )}
      {revenue && (
        <div>
          <h4 className="font-bold text-[18px]">{t('FilmPage.revenue')}</h4>
          <span>{revenue}</span>
        </div>
      )}
      {network && (
        <div>
          <h4 className="font-bold text-[18px]">{t('FilmPage.network')}</h4>
          {network.map((item, index) => (
            <div key={index}>
              <img src={item} alt="network" />
            </div>
          ))}
        </div>
      )}
      {type && (
        <div>
          <h4 className="font-bold text-[18px]">{t('FilmPage.type')}</h4>
          <span>{type}</span>
        </div>
      )}
    </div>
  );
};
