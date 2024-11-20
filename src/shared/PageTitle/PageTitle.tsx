import { PageTitleType, imageSize } from './model/model';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useMemo } from 'react';

export const PageTitle = ({ image, year, title, link }: PageTitleType) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const linkName = useMemo(() => {
    return link.includes('/season/') ? t('backToSeasons') : t('backToMenu');
  }, [pathname]);

  const imageLink = `${import.meta.env.VITE_IMAGE_API_LINK}/${imageSize}/${image}`;

  return (
    <div className="w-full flex items-center lg:justify-center bg-gray-600 min-h-28 text-black">
      <div className="flex items-center lg:w-[1400px] py-[15px] px-10">
        <div className="w-[58px] h-[87px] ">
          <img src={imageLink} alt={title} className="object-cover" />
        </div>

        <div className="ml-5">
          <span className="flex flex-col lg:flex-row lg:text-[2rem] text-[1.6rem] ">
            <Link to={link}>
              <h2 className="font-semibold">{title}</h2>
            </Link>
            <span className="opacity-80 font-normal lg:text-[2rem] text-[1.6rem] ml-1">
              ({year})
            </span>
          </span>
          <Link
            to={link}
            className="flex items-center gap-2 text-[1.1rem] font-semibold mt-1.5 opacity-60"
          >
            <FaArrowLeft />
            {linkName}
          </Link>
        </div>
      </div>
    </div>
  );
};
