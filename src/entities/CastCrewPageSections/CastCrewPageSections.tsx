import { useTranslation } from 'react-i18next';
import { PageTitle } from '@/shared/PageTitle/PageTitle';
import { CastCrewPageSectionsType } from './model/model';
import { CastCrewCard } from '@/shared/CastCrewCard/CastCrewCard';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export const CastCrewPageSections = ({
  title,
  cast,
  crew,
  crewAmount,
}: CastCrewPageSectionsType) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const titles = useMemo(() => {
    return pathname.includes('movie')
      ? [t('FilmPage.cast'), t('FilmPage.crew')]
      : [t('FilmPage.castTV'), t('FilmPage.crewTV')];
  }, [pathname]);

  return (
    <div className="flex flex-col w-full mb-20 lg:items-center">
      <PageTitle {...title} />
      <div className="lg:flex lg:px-10 lg:py-[30px] lg:justify-center lg:max-w-[1400px] lg:w-[1400px]">
        <div className="w-full flex lg:flex-row flex-col items-start ">
          <div className="w-full flex flex-1 flex-col pb-5 border-b lg:border-none">
            <h2 className="font-semibold text-[1.4em] mb-5 text-black px-10 lg:px-0 mt-5 lg:mt-0">
              {titles[0]}
              <span className="ml-2 text-black/60 font-light">
                {cast?.length}
              </span>
            </h2>
            <div className="lg:px-0 px-10 flex flex-col gap-3">
              {!!cast?.length &&
                cast?.map((item, index) => (
                  <CastCrewCard key={index} {...item} />
                ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <h2 className="font-semibold text-[1.4em] mb-5 text-black px-10 lg:px-0 mt-5 lg:mt-0">
              {titles[1]}
              <span className="ml-2 text-black/60 font-light">
                {crewAmount}
              </span>
            </h2>
            <div className="lg:px-0 px-10 flex flex-col gap-3">
              {crew &&
                Object?.keys(crew)?.map((param, index) => {
                  const items = crew[param];
                  return (
                    <div key={index} className="mb-[30px]">
                      <h3 className="text-[1rem] font-semibold mb-2">
                        {param}
                      </h3>
                      <div className="flex flex-col  gap-3">
                        {items.map((item, index) => (
                          <CastCrewCard key={index} {...item} />
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
