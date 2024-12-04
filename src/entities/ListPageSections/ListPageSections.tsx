import { ListPageSectionsType, ListPageSectionsVariant } from './model/model';
import { FilmCardVariant } from '@/shared/FilmCard/model/model';
import { FilmCard } from '@/shared/FilmCard/FilmCard';
import { Pagination } from '@/shared/Pagination/Pagination';
import classNames from 'classnames';

export const ListPageSections = ({
  items,
  page,
  handlePageChange,
  title,
  className,
  variant = ListPageSectionsVariant.default,
}: ListPageSectionsType) => {
  return (
    <div
      className={classNames('w-full flex flex-col items-center', className, {
        'max-w-[1400px]  px-10 py-[30px]':
          variant === ListPageSectionsVariant.default,
      })}
    >
      <div className="w-full flex items-start">
        {variant === ListPageSectionsVariant.default && (
          <h2 className="mb-5 text-[1.6rem] font-semibold text-black text-start">
            {title}
          </h2>
        )}
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
