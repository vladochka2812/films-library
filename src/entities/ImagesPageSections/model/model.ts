import { ImageType } from '@/shared/ImageCard/model/model';
import { PageTitleType } from '@/shared/PageTitle/model/model';
import { TabMenuType } from '@/shared/TabMenu/model/model';

export type ImagePageSectionsType = {
  title: PageTitleType;
  tabMenu: TabMenuType;
  images: ImageType[];
};

export enum VideoTypes {
  backdrops = 'Backdrops',
  posters = 'Posters',
}
