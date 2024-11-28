import { YearsGroupsType } from '@/pages/Person/model/model';
import { ReactNode } from 'react';

export type InfoType = {
  knowingFor: string;
  gender: string;
  birthday: string;
  dayOfDeath?: string;
  place: string;
  knownAs: string[];
};

export type SocialType = { text: string; icon: ReactNode; link: string };

export type SocialInfoType = {
  items: SocialType[];
  home?: SocialType;
};

export type KnownForType = {
  link: string;
  image: string;
  name: string;
}[];

export type JobType = {
  name: string;
  link: string;
  character?: string;
  year: string;
  episode?: string;
  job?: string;
};

export type JobListType = {
  title: string;
  items: YearsGroupsType;
};

export const knowForCardSize = '/w150_and_h225_bestv2';
