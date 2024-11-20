import { CastCrewCardType } from '@/shared/CastCrewCard/model/model';
import { PageTitleType } from '@/shared/PageTitle/model/model';

export type CastCrewPageSectionsType = {
  title: PageTitleType;
  cast: CastCrewCardType[];
  crew: Record<string, CastCrewCardType[]>;
  crewAmount: number;
};
