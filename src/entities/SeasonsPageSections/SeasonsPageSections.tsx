import { SeasonCard } from '@/shared/SeasonCard/SeasonCard';
import { SeasonsPageSectionsType } from './model/model';
import { PageTitle } from '@/shared/PageTitle/PageTitle';

export const SeasonsPageSections = ({
  title,
  seasons,
}: SeasonsPageSectionsType) => {
  return (
    <div className="flex flex-col w-full mb-20 lg:items-center">
      <PageTitle {...title} />
      <div className="w-full flex flex-col">
        {!!seasons?.length &&
          seasons?.map((season, index) => (
            <div
              className="w-full flex justify-center border-b p-5"
              key={index}
            >
              <div className="w-full lg:max-w-[1400px]">
                <SeasonCard {...season} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
