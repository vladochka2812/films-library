import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { TabMenuVariant } from '@/shared/TabMenu/model/model';
import { TabMenu } from '@/shared/TabMenu/TabMenu';
import { MediaType } from '../model/model';
import { HorizontalScrollWrapper } from '@/shared/HorizontalScrollWrapper/HorizontalScrollWrapper';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { HorizontalScrollWrapperVariant } from '@/shared/HorizontalScrollWrapper/model/model';
import { Video } from './Video';

export const Media = ({
  posters,
  backdrops,
  videos,
  videoAmount,
  postersAmount,
  backdropsAmount,
}: MediaType) => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const items = [
    t('FilmPage.video'),
    t('FilmPage.backdrops'),
    t('FilmPage.poster'),
  ];

  const afterContent = [videoAmount, backdropsAmount, postersAmount];

  const viewMore = (
    <span className="flex text-nowrap text-[1.3rem] items-center">
      {t('FilmPage.viewMore')}
      <FaLongArrowAltRight className="text-[1.2rem] ml-1" />
    </span>
  );

  const [selectedTab, setSelectedTab] = useState<string>(items[0]);

  const getContent = () => {
    switch (selectedTab) {
      case items[0]:
        return (
          <div className="flex items-center">
            {videos?.map((video, index) => <Video video={video} key={index} />)}
            {parseInt(videoAmount) > 6 && (
              <Link to={`${pathname}/videos`} className="ml-10">
                {viewMore}
              </Link>
            )}
          </div>
        );
      case items[1]:
        return (
          <div className="flex items-center">
            {backdrops.map((backdrop, index) => (
              <div
                key={index}
                className="lg:min-w-[533px] lg:w-[533px] lg:min-h-[300px] lg:h-[300px] min-w-[250px] w-[250px] min-h-[141px] h-[141px] bg-cover bg-center bg-no-repeat"
              >
                <img
                  src={backdrop}
                  className="w-full h-full object-cover"
                  alt={backdrop}
                />
              </div>
            ))}
            {parseInt(backdropsAmount) > 6 && (
              <Link to={`${pathname}/images`} className="ml-10">
                {viewMore}
              </Link>
            )}
          </div>
        );
      case items[2]:
        return (
          <div className="flex items-center">
            {posters.map((poster, index) => (
              <div
                key={index}
                className="lg:min-w-[200px] lg:w-[200px] lg:min-h-[300px] lg:h-[300px] min-w-[94px] w-[94px] min-h-[141px] h-[141px] bg-cover bg-center bg-no-repeat"
              >
                <img
                  src={poster}
                  className="w-full h-full object-cover"
                  alt={poster}
                />
              </div>
            ))}
            {parseInt(postersAmount) > 6 && (
              <Link to={`${pathname}/images`} className="ml-10">
                {viewMore}
              </Link>
            )}
          </div>
        );
      default:
        return <div>No content available.</div>;
    }
  };

  const content = getContent();

  return (
    <div className="py-[30px]">
      <div className="flex lg:justify-start justify-between lg:mx-0 mx-4">
        <h3 className="mb-[30px] mr-[50px] font-semibold text-[1.4rem] ">
          {t('FilmPage.media')}
        </h3>
        <TabMenu
          afterContent={afterContent}
          variant={TabMenuVariant.simple}
          items={items}
          selectedItem={selectedTab}
          onSelect={(tab) => setSelectedTab(tab)}
        />
      </div>

      {videos || posters || backdrops ? (
        <div className="mt-[-20px]">
          <HorizontalScrollWrapper
            variant={HorizontalScrollWrapperVariant.simple}
            className="py-[-20px]"
          >
            {content}
          </HorizontalScrollWrapper>
        </div>
      ) : (
        <div>{t('emptyMessages.media')}</div>
      )}
    </div>
  );
};
