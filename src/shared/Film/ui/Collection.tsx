import React from 'react';
import { useTranslation } from 'react-i18next';
import { CollectionType } from '../model/model';
import { Link } from 'react-router-dom';

export const Collection = ({ name, link, bgImage }: CollectionType) => {
  const { t } = useTranslation();

  return (
    <div
      className="max-w-[1000px] w-[800px] h-[258px] rounded-2xl mt-10 text-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(3, 37, 65, 1) 0%, rgba(3, 37, 65, 0.6) 100%), url(${bgImage})`,
        backgroundPosition: `center, left calc((50vw - 170px) - 340px) top`,
        backgroundSize: 'cover',
        backgroundPositionX: '50%',
        backgroundPositionY: '50%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="px-5 flex flex-col h-full justify-center">
        <h2 className="text-[1.9rem] font-semibold ">
          {t('FilmPage.part')} {name}
        </h2>
        <Link
          className="mt-5 text-[1.1rem] rounded-full p-2 bg-darkBrown hover:bg-black max-w-[250px] flex justify-center"
          to={link}
        >
          {t('FilmPage.view')}
        </Link>
      </div>
    </div>
  );
};
