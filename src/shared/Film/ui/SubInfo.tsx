import { FaLink } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { SubInfoType } from '../model/model';
import { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const SubInfo = ({
  homepage,
  revenue,
  status,
  budget,
  language,
  network,
  type,
  keywords,
}: SubInfoType) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" flex-col flex lg:px-10 px-5 py-[30px] border-b lg:max-w-[250px]">
      {homepage && (
        <div
          className="relative flex flex-col  mb-[30px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a href={homepage} target="_blank">
            <FaLink size={30} />
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

      <h4 className="text-[1.1rem] font-semibold mb-2.5">
        {t('FilmPage.facts')}
      </h4>

      <div className="mb-5">
        <h4 className="font-semibold text-[1rem]">{t('FilmPage.status')}</h4>
        <span>{status}</span>
      </div>
      <div className="mb-5">
        <h4 className="font-semibold text-[1rem]">{t('FilmPage.language')}</h4>
        <span>{language}</span>
      </div>
      {budget && (
        <div className="mb-5">
          <h4 className="font-bold text-[1rem]">{t('FilmPage.budget')}</h4>
          <span>{budget}</span>
        </div>
      )}
      {revenue && (
        <div className="mb-5">
          <h4 className="font-bold text-[1rem]">{t('FilmPage.revenue')}</h4>
          <span>{revenue}</span>
        </div>
      )}
      {network && (
        <div className="mb-5">
          <h4 className="font-bold text-[1rem]">{t('FilmPage.network')}</h4>
          {network.map((item, index) => (
            <div key={index}>
              <img src={item} alt="network" />
            </div>
          ))}
        </div>
      )}
      {type && (
        <div className="mb-[30px]">
          <h4 className="font-bold text-[18px]">{t('FilmPage.type')}</h4>
          <span>{type}</span>
        </div>
      )}
      {keywords && (
        <div className="mb-[30px]">
          <h4 className="text-[1.1rem] font-semibold mb-2.5">
            {t('FilmPage.keywords')}
          </h4>
          <ul className="pb-[30px] flex flex-wrap w-full justify-start">
            {keywords.map((keyword, index) => (
              <li
                key={index}
                className="mr-[5px] mb-[10px] leading-6 text-[0.9rem] text-nowrap"
              >
                <Link
                  to={keyword.link}
                  className="bg-black/10 border border-gray-400 rounded px-2.5 py-1"
                >
                  {keyword.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
