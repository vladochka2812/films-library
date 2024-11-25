import { GoDotFill } from 'react-icons/go';
import { EpisodeCardType } from './model/model';
import { Rate } from '../Film/ui/Rate';
import { useTranslation } from 'react-i18next';
import { Accordion } from '../Accordion/Accordion';
import { IoIosArrowDown } from 'react-icons/io';
import { useMemo, useState } from 'react';
import { CastCrewCard } from '../CastCrewCard/CastCrewCard';
import { HorizontalScrollWrapper } from '../HorizontalScrollWrapper/HorizontalScrollWrapper';
import { HorizontalScrollWrapperVariant } from '../HorizontalScrollWrapper/model/model';

export const EpisodeCard = ({
  image,
  episodeName,
  episodeNumber,
  rate,
  date,
  runtime,
  overview,
  crew,
  cast,
  triggerFunc,
}: EpisodeCardType) => {
  const { t } = useTranslation();
  const [images, setImages] = useState<string[] | undefined>(undefined);

  const handleTrigger = async () => {
    const res = await triggerFunc(episodeNumber);
    setImages(res);
  };

  const memoizedCrew = useMemo(() => {
    if (!crew) return [];
    return Object.keys(crew).map((param) => ({
      param,
      items: crew[param].join(', '),
    }));
  }, [crew]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex lg:flex-row flex-col items-center border max-w-[1400px] lg:w-[1300px] w-full rounded-t-lg">
        <div className="lg:w-[230px] lg:h-[130px] max-w-[640px] max-h-[360px]">
          <img
            src={image}
            alt={episodeName}
            className="w-full h-full object-cover lg:rounded-tl-md lg:rounded-r-none rounded-t-md"
          />
        </div>
        <div className="py-2 px-5 lg:max-w-[1000px] max-w-[640px]">
          <h2 className="flex gap-3 font-semibold text-[1.1rem]">
            <span>{episodeNumber}</span>
            <span>{episodeName}</span>
          </h2>
          <div className="mt-0.5 flex gap-4">
            <Rate rate={rate} />
            <div className="flex items-center gap-1">
              <span>{date}</span>
              <GoDotFill size={10} />
              <span>{runtime}</span>
            </div>
          </div>
          <p className="pt-2 text-[0.9rem]">{overview}</p>
        </div>
      </div>
      <div className="w-full flex justify-center border-b border-r border-l rounded-b-lg -mt-3">
        <Accordion
          className="pb-[10px]"
          trigger={
            <div className="flex items-center justify-center mt-5 w-full">
              {t('expand')} <IoIosArrowDown className="ml-2" />
            </div>
          }
          handleClick={handleTrigger}
        >
          <>
            <div className="py-[15px] px-5 flex lg:flex-row flex-col-reverse w-full border-t border-b">
              <div className="lg:w-[30%]">
                <h3 className="text-[1rem] mb-2 font-semibold">
                  {t('FilmPage.crew')}
                  <span className="ml-1 font-medium text-text/70">
                    {memoizedCrew.length
                      ? memoizedCrew.length
                      : t('emptyMessages.person')}
                  </span>
                </h3>
                {memoizedCrew.map(({ param, items }, index) => (
                  <div key={index} className="flex">
                    <h4 className="text-[0.9rem] font-semibold mb-2">
                      {param}:
                    </h4>
                    {items && <h4 className="text-[0.9rem] ml-1">{items}</h4>}
                  </div>
                ))}
              </div>
              <div className="lg:w-[70%]">
                <h3 className="text-[1rem] mb-2 font-semibold">
                  {t('FilmPage.guestStars')}
                  <span className="ml-1 font-medium text-text/70">
                    {cast?.length ? cast.length : t('emptyMessages.guest')}
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {!!cast?.length &&
                    cast.map((item) => <CastCrewCard {...item} />)}
                </div>
              </div>
            </div>
            <div className="py-[15px] px-5 w-full">
              <h3 className="text-[1rem] mb-2 font-semibold">
                {t('FilmPage.episodeImages')}
                <span className="ml-1 font-medium text-text/70">
                  {images?.length
                    ? images.length
                    : t('emptyMessages.episodeImage')}
                </span>
              </h3>
              {!!images?.length && (
                <HorizontalScrollWrapper
                  variant={HorizontalScrollWrapperVariant.simple}
                >
                  <div
                    className={`flex w-[calc(160 * ${images.length})px] gap-2`}
                  >
                    {images.map((image, index) => (
                      <div key={index} className="w-[160px] h-[90px]">
                        <img
                          src={image}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </HorizontalScrollWrapper>
              )}
            </div>
          </>
        </Accordion>
      </div>
    </div>
  );
};
