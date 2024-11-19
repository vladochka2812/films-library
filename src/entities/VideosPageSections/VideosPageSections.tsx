import { PageTitle } from '@/shared/PageTitle/PageTitle';

import { VideoPageSectionsType } from './model/model';
import { TableTabMenu } from '@/shared/TabMenu/TableTabMenu';
import { useTranslation } from 'react-i18next';
import { VideoCard } from '@/shared/VideoCard/VideoCard';

export const VideosPageSections = ({
  title,
  tabMenu,
  videos,
}: VideoPageSectionsType) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full mb-20 lg:items-center">
      <PageTitle {...title} />
      <div className="lg:flex lg:px-10 lg:py-[30px] lg:justify-center lg:max-w-[1400px] lg:w-[1400px]">
        <TableTabMenu {...tabMenu} />
        <div className="w-full flex flex-col lg:items-start items-center gap-[30px] lg:ml-[30px] px-10 py-[30px] lg:px-0 lg:py-0">
          {!!videos.length ? (
            videos?.map((video, index) => <VideoCard {...video} key={index} />)
          ) : (
            <p>{t('emptyMessages.videos')}</p>
          )}
        </div>
      </div>
    </div>
  );
};
