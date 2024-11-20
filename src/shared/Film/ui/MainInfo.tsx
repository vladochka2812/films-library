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

  // const image = (
  //   <div className="lg:min-w-[300px] lg:w-[300px] lg:h-[450px] min-w-[200px] w-[200px] h-[300px] lg:mt-0 mt-[400px]">
  //     <img
  //       src={mainImageHref}
  //       alt={name}
  //       className="w-full h-full object-cover rounded-3xl"
  //     />
  //   </div>
  // );

  return (
    <div
      className="
      max-w-[100vw] flex justify-center relative lg:max-w-[1920px] lg:bg-[center, left calc((50vw - 170px) - 340px) top] bg-center bg-cover lg:w-[calc(100vw-10px)] w-full lg:h-[500px] border-b border-primaryColor bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%), url(${bgImageHref})`,
      }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-center lg:px-10 py-[30px] lg:max-w-[1400px]  text-white ">
        <div
          className="lg:hidden mt-[-30px] h-[258px] bg-cover"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(31.5, 10.5, 10.5, 0.9) 20%, rgba(31.5, 10.5, 10.5, 0.2) 50%), url(${bgImageHref})`,
          }}
        >
          <div className="w-[140px] h-[210px] sm:mx-6 sm:my-10 m-5">
            <img
              src={mainImageHref}
              alt={name}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        <div className="lg:min-w-[300px] lg:w-[300px] lg:h-[450px]  hidden lg:flex">
          <img
            src={mainImageHref}
            alt={name}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="lg:pl-10 flex flex-col lg:items-start items-center">
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
          <div className="flex items-center lg:mt-0 mt-[-10px]">
            {vote > 0 && (
              <>
                <RatingRing percent={vote} size={CircleSize.big} />
                <div className="ml-1 font-bold ">
                  <span className="">{t('FilmPage.user')}</span>
                  <br />
                  <span className="">{t('FilmPage.score')}</span>
                </div>
              </>
            )}
          </div>
          <div>
            <div className="lg:mt-8 lg:px-0 px-4 mt-4]">
              <h3 className="text-[1.1rem] italic opacity-70 font-normal">
                {tagline}
              </h3>
              <h3 className="mt-[10px] text-[1.3rem] font-medium mb-2">
                {t('FilmPage.overview')}
              </h3>
              <p className="mb-4 leading-6 text-[16px]">{overview}</p>
            </div>
            <div>
              <h3 className="lg:mt-[10px] text-[1.3rem] font-medium mb-2 lg:px-0 px-4">
                {t('FilmPage.production')}
              </h3>
              <div className="flex gap-y-2 gap-x-7 flex-wrap lg:px-0 px-4">
                {production?.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
              {createdBy && (
                <div className="flex flex-wrap gap-y-2 gap-x-20 lg:mt-5 mt-3 lg:px-0 px-4">
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
    </div>
  );
};
