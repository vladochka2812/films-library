import { ListPageSectionsType } from './model/model';
import { FilmCardVariant } from '@/shared/FilmCard/model/model';
import { FilmCard } from '@/shared/FilmCard/FilmCard';
import { Pagination } from '@/shared/Pagination/Pagination';

export const ListPageSections = ({
  items,
  page,
  handlePageChange,
  title,
}: ListPageSectionsType) => {
  return (
    <div className="w-full flex flex-col items-center max-w-[1400px] px-10 py-[30px]">
      <div className="w-full flex items-start">
        <h2 className="mb-5 text-[1.6rem] font-semibold text-black text-start">
          {title}
        </h2>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {items?.results?.map((item) => (
          <FilmCard key={item.id} film={item} variant={FilmCardVariant.pages} />
        ))}
      </div>
      <div className="mt-10">
        <Pagination
          totalPage={items?.total_pages}
          currentPage={page}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
