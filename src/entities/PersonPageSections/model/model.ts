import { JobGroupsType, YearsGroupsType } from '@/pages/Person/model/model';
import {
  InfoType,
  KnownForType,
  SocialInfoType,
} from '@/shared/Person/model/model';

export type PersonPageSectionsType = {
  info: InfoType;
  social: SocialInfoType;
  image: string;
  name: string;
  biography: string;
  credits: KnownForType;
  acting: YearsGroupsType;
  jobs?: { [key: string]: YearsGroupsType };
};
