import { FilmCard } from '@/shared/FilmCard/FilmCard';
import { FilmCardVariant, FilmType } from '@/shared/FilmCard/model/model';
import { HorizontalScrollWrapper } from '@/shared/HorizontalScrollWrapper/HorizontalScrollWrapper';
import { HorizontalScrollWrapperVariant } from '@/shared/HorizontalScrollWrapper/model/model';
import { useTranslation } from 'react-i18next';

export const Recommendations = ({ films }: { films: FilmType[] }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-[30px] py-[30px] border-t">
      <h3 className="mb-[30px] mr-[50px] font-semibold text-[1.4rem] ">
        {t('FilmPage.recommendations')}
      </h3>
      <div className="mt-[-20px]">
        <HorizontalScrollWrapper
          variant={HorizontalScrollWrapperVariant.simple}
        >
          <div className="flex  items-center">
            {!!films?.length &&
              films.map((film, index) => (
                <div key={index} className="mr-[15px]">
                  <FilmCard variant={FilmCardVariant.hover} film={film} />
                </div>
              ))}
          </div>
        </HorizontalScrollWrapper>
      </div>
    </div>
  );
};
