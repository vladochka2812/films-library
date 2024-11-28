import { useMemo } from 'react';
import { normalizeTitle } from '@/shared/FilmCard/model/model'; // Adjust path accordingly
import { CastMember } from '@/pages/Person/model/model';
import { getYear } from '@/shared/Date/Date';

export const useActingList = (cast: CastMember[]) => {
  return cast?.map((item) => {
    return {
      year:
        (item?.first_air_date && getYear(item.first_air_date)) ||
        (item?.release_date && getYear(item.release_date)) ||
        '-',
      name: item?.name || item?.title || '',
      episode: item?.episode_count
        ? `${item.episode_count} ${item.episode_count === 1 ? 'Episode' : 'Episodes'}`
        : '',
      character: item?.character,
      link: `/${item.media_type ? item.media_type : 'tv'}/${item.id}-${
        item?.title
          ? item?.title?.toLowerCase().replace(normalizeTitle, '-')
          : item?.name?.toLowerCase().replace(normalizeTitle, '-')
      }`,
    };
  });
};
