import { useTranslation } from 'react-i18next';
import { MainInfoType } from '../model/model';
import { GoDotFill } from 'react-icons/go';
import { RatingRing } from '@/shared/FilmCard/ui/RatingRing';
import { CircleSize } from '@/shared/FilmCard/model/model';
import { Link } from 'react-router-dom';

export const MainInfo = ({
  mainImageHref,
  bgImageHref,
  name,
  overview,
  vote,
  tagline,
  date,
  genresList,
  year,
  timing,
  production,
  createdBy,
}: MainInfoType) => {
  const { t } = useTranslation();

  return (
    <div
      className="flex justify-center relative lg:max-w-[1920px] w-[calc(100vw-10px)] lg:w-[100vw] h-[500px] border-b border-primaryColor bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%), url(${bgImageHref})`,
        backgroundPosition: `center, left calc((50vw - 170px) - 340px) top`,
        backgroundSize: 'cover',
      }}
    >
      <div className="flex items-center justify-center px-10 py-[30px] max-w-[1400px] text-white ">
        <div className="min-w-[300px] w-[300px] h-[450px] ">
          <img
            src={mainImageHref}
            alt={name}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="pl-10">
          <div className="mb-6">
            <div className="flex">
              <h2 className="text-[2.2rem] font-semibold">{name}</h2>
              <span className="opacity-80 font-normal text-[2.2rem] ml-1">
                ({year})
              </span>
            </div>
            <div className="flex items-center mt-[-4px]">
              <span>{date}</span>
              <GoDotFill className="mx-2" size={10} />
              <span className="">{genresList}</span>
              <GoDotFill className="mx-2" size={10} />
              <span>{timing}</span>
            </div>
          </div>
          <div className="flex items-center">
            <RatingRing percent={vote} size={CircleSize.big} />
            <div className="ml-1 font-bold ">
              <span className="">{t('FilmPage.user')}</span>
              <br />
              <span className="">{t('FilmPage.score')}</span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-[1.1rem] italic opacity-70 font-normal">
              {tagline}
            </h3>
            <h3 className="mt-[10px] text-[1.3rem] font-medium mb-2">
              {t('FilmPage.overview')}
            </h3>
            <p className="mb-4 leading-6 text-[16px]">{overview}</p>
          </div>
          <div>
            <h3 className="mt-[10px] text-[1.3rem] font-medium mb-2">
              {t('FilmPage.production')}
            </h3>
            <div className="flex gap-7">
              {production?.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
            {createdBy && (
              <div className="flex gap-20 mt-5">
                {createdBy?.map((item, index) => (
                  <Link
                    to={item.link}
                    key={index}
                    className="font-semibold hover:opacity-65"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
