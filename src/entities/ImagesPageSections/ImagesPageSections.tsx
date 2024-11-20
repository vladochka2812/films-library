import { ImagePageSectionsType } from './model/model';
import { useTranslation } from 'react-i18next';
import { ImageCard } from '@/shared/ImageCard/ImageCard';
import { TableTabMenu } from '@/shared/TabMenu/TableTabMenu';
import { PageTitle } from '@/shared/PageTitle/PageTitle';

export const ImagesPageSections = ({
  title,
  tabMenu,
  images,
}: ImagePageSectionsType) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full mb-20 lg:items-center">
      <PageTitle {...title} />
      <div className="lg:flex lg:px-10 lg:py-[30px] lg:justify-center lg:max-w-[1400px] lg:w-[1400px]">
        <TableTabMenu {...tabMenu} />
        <div className="w-full flex flex-wrap lg:items-start items-center gap-[30px] lg:ml-[30px] px-10 py-[30px] lg:px-0 lg:py-0">
          {!!images?.length ? (
            images?.map((image, index) => <ImageCard key={index} {...image} />)
          ) : (
            <p>{t('emptyMessages.images')}</p>
          )}
        </div>
      </div>
    </div>
  );
};
