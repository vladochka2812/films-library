import { PageTitle } from '@/shared/PageTitle/PageTitle';

import { VideoPageSectionsType } from './model/model';
import { TableTabMenu } from '@/shared/TabMenu/TableTabMenu';
import { VideoCard } from '@/shared/VideoCard/VideoCard';

export const VideosPageSections = ({
  title,
  tabMenu,
  videos,
}: VideoPageSectionsType) => {
  return (
    <div className="flex flex-col w-full mb-20 lg:items-center">
      <PageTitle {...title} />
      <div className="lg:flex lg:px-10 lg:py-[30px] lg:justify-center lg:max-w-[1400px] lg:w-[1400px]">
        <TableTabMenu {...tabMenu} />
        <div className="w-full flex flex-col lg:items-start items-center gap-[30px] lg:ml-[30px] px-10 py-[30px] lg:px-0 lg:py-0">
          {videos ? (
            videos?.map((video) => (
              <VideoCard
                key={video.id}
                name={video.name}
                videoKey={video.key}
                type={video.type}
                published_at={video.published_at}
              />
            ))
          ) : (
            <p>There no videos.</p>
          )}
        </div>
      </div>
    </div>
  );
};
