import { CastMember } from '@/pages/Person/model/model';
import { normalizeTitle } from '@/shared/FilmCard/model/model';
import { knowForCardSize } from '@/shared/Person/model/model';

const useCreditsList = (cast: CastMember[]) => {
  return cast
    ?.map((item) => {
      return {
        link: `/${item.media_type ? item?.media_type : 'tv'}/${item.id}-${
          item?.title
            ? item?.title?.toLowerCase().replace(normalizeTitle, '-')
            : item?.name?.toLowerCase().replace(normalizeTitle, '-')
        }`,
        image: `${import.meta.env.VITE_IMAGE_API_LINK}${knowForCardSize}${item.poster_path}`,
        name: item?.name || item?.title || '',
      };
    })
    .slice(0, 8);
};

export default useCreditsList;
