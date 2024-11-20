import { ImageCardType } from '@/shared/ImageCard/model/model';
import { PageTitleType } from '@/shared/PageTitle/model/model';
import { TabMenuType } from '@/shared/TabMenu/model/model';

export type ImagePageSectionsType = {
  title: PageTitleType;
  tabMenu: TabMenuType;
  images: ImageCardType[];
};

export enum ImageTypes {
  backdrops = 'Backdrops',
  posters = 'Posters',
}
