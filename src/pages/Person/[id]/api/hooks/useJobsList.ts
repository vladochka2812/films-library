import { CrewMember } from '@/pages/Person/model/model';
import { getYear } from '@/shared/Date/Date';
import { normalizeTitle } from '@/shared/FilmCard/model/model';

export const useJobsList = (crew: CrewMember[]) => {
  return crew?.reduce<{ [key: string]: any }>((acc, item) => {
    const department = item?.department || 'Unknown';
    if (!acc[department]) {
      acc[department] = [];
    }
    const data = {
      year:
        (item?.first_air_date && getYear(item.first_air_date)) ||
        (item?.release_date && getYear(item.release_date)) ||
        '-',
      name: item?.name || item?.title || '',
      episode: item?.episode_count
        ? `${item.episode_count} ${item.episode_count === 1 ? 'Episode' : 'Episodes'}`
        : '',
      job: item?.job,
      link: `/${item.media_type ? item.media_type : 'tv'}/${item.id}-${
        item?.title
          ? item?.title?.toLowerCase().replace(normalizeTitle, '-')
          : item?.name?.toLowerCase().replace(normalizeTitle, '-')
      }`,
    };
    acc[department].push(data);
    return acc;
  }, {});
};
