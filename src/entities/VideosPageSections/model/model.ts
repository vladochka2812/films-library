import { PageTitleType } from '@/shared/PageTitle/model/model';
import { TabMenuType } from '@/shared/TabMenu/model/model';
import { VideoType } from '@/shared/VideoCard/model/model';

export type VideoPageSectionsType = {
  title: PageTitleType;
  tabMenu: TabMenuType;
  videos: VideoType[];
};

export enum VideoTypes {
  trailer = 'Trailer',
  teaser = 'Teaser',
  clip = 'Clip',
  behindTheScene = 'Behind the Scenes',
  blooper = 'Blooper',
  featurette = 'Featurette',
}
