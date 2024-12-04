import { useTranslation } from 'react-i18next';
import { Accordion } from '@/shared/Accordion/Accordion';
import { Dropdown } from '@/shared/Dropdown/Dropdown';
import { IoIosArrowDown } from 'react-icons/io';
import { InputDate } from '@/shared/Input/InputDate';
import { SliderLine } from '@/shared/SliderLine/SliderLine';
import { Autocomplete } from '@/shared/Autocomplete/Autocomplete';
import classNames from 'classnames';
import { FiltersSectionType } from './model/model';

export const FiltersSection = ({
  className,
  sortedList,
  handleSortedBy,
  handleEndDateChange,
  handleStartDateChange,
  selectedGenres,
  genres,
  handleAddGenres,
  keywords,
  setKeyword,
  setSelectedKeyword,
  userScore,
  voteScore,
  runtimeScore,
  title,
}: FiltersSectionType) => {
  const { t } = useTranslation();

  return (
    <div className={'w-full lg:w-[260px] lg:p-0 p-2 ' + className}>
      <h2 className="mb-5 text-[1.6rem] font-semibold text-black text-start">
        {title}
      </h2>
      <Accordion
        className="border rounded-md shadow-lg"
        trigger={
          <div className="py-[14px] flex justify-between items-center px-4 font-semibold text-[1.1rem]">
            <h2>{t('filter.sort')}</h2>
            <span>
              <IoIosArrowDown size={20} />
            </span>
          </div>
        }
      >
        <div className="w-full pt-[14px] px-4 pb-4 border-t">
          <h3 className="mb-2.5 text-[0.9rem] font-light">
            {t('filter.sortBy')}
          </h3>
          <Dropdown
            options={sortedList}
            onChange={(key) => handleSortedBy(key)}
          />
        </div>
      </Accordion>

      <Accordion
        className="border rounded-md shadow-lg mt-3"
        trigger={
          <div className="py-[14px] flex justify-between items-center px-4 font-semibold text-[1.1rem]">
            <h2>{t('filter.filters')}</h2>
            <span>
              <IoIosArrowDown size={20} />
            </span>
          </div>
        }
      >
        <div className="w-full pt-[14px] px-4 pb-4 border-t">
          <h3 className="mb-2.5 text-[0.9rem] font-light">
            {t('filter.releaseDates')}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-[0.9rem] font-light text-gray-400">
              {t('filter.from')}
            </span>
            <div>
              <InputDate changeEventHandler={handleStartDateChange} />
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[0.9rem] font-light text-gray-400">
              {t('filter.to')}
            </span>
            <div>
              <InputDate changeEventHandler={handleEndDateChange} />
            </div>
          </div>
        </div>
        <div className="w-full pt-[14px] px-4 pb-4 border-t">
          <h3 className="mb-2.5 text-[0.9rem] font-light">
            {t('filter.genres')}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {genres?.map((item) => (
              <li
                className={classNames(
                  'py-1 px-3 border rounded-2xl text-[0.9rem] border-black/40 hover:border-lightBlue hover:bg-lightBlue hover:text-white',
                  {
                    'border-lightBlue bg-lightBlue text-white':
                      selectedGenres.findIndex((g) => g === item.id) !== -1,
                  }
                )}
                onClick={() => handleAddGenres(item.id)}
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full pt-[14px] px-4 pb-8 border-t">
          <h3 className="mb-4 text-[0.9rem] font-light">
            {t('filter.userScore')}
          </h3>
          <SliderLine {...userScore} />
        </div>
        <div className="w-full pt-[14px] px-4 pb-8 border-t">
          <h3 className="mb-4 text-[0.9rem] font-light">{t('filter.vote')}</h3>
          <SliderLine {...voteScore} />
        </div>
        <div className="w-full pt-[14px] px-4 pb-8 border-t">
          <h3 className="mb-4 text-[0.9rem] font-light">
            {t('filter.runtime')}
          </h3>
          <SliderLine {...runtimeScore} />
        </div>
        <div className="w-full pt-[14px] px-4 pb-8 border-t">
          <h3 className="mb-4 text-[0.9rem] font-light">
            {t('filter.keywords')}
          </h3>
          <Autocomplete
            suggestions={keywords || []}
            setInput={(e: string) => setKeyword(e)}
            saveKeywords={(ids: number[]) => setSelectedKeyword(ids)}
            placeholder={t('filter.byKeywords')}
          />
        </div>
      </Accordion>
    </div>
  );
};
