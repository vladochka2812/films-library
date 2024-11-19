import { PageTitle } from '@/shared/PageTitle/PageTitle';
import { TableTabMenu } from '@/shared/TabMenu/TableTabMenu';

import { ImagePageSectionsType } from './model/model';
import { ImageCard } from '@/shared/ImageCard/ImageCard';
import { ImageCardVariant } from '@/shared/ImageCard/model/model';

export const ImagesPageSections = ({
  title,
  tabMenu,
  images,
}: ImagePageSectionsType) => {
  return (
    <div className="flex flex-col w-full mb-20 lg:items-center">
      <PageTitle {...title} />
      <div className="lg:flex lg:px-10 lg:py-[30px] lg:justify-center lg:max-w-[1400px] lg:w-[1400px]">
        <TableTabMenu {...tabMenu} />
        <div className="w-full flex flex-wrap lg:items-start items-center gap-[30px] lg:ml-[30px] px-10 py-[30px] lg:px-0 lg:py-0">
          {images?.map((image, index) => (
            <ImageCard
              key={index}
              width={image.width}
              height={image.height}
              file_path={image.file_path}
              type={
                image.width < image.height
                  ? ImageCardVariant.poster
                  : ImageCardVariant.backdrop
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
