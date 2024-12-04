import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { SortedBy } from '../model/model';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { getFiltered } from '../api/gets/getFiltered';
import { getGenres } from '../api/gets/getGenres';
import { CaptionPosition } from '@/shared/SliderLine/model/model';
import { getKeywords } from '../api/gets/getKeywords';
import { FiltersSection } from '@/entities/FiltersSection/FiltersSection';
import { ListPageSections } from '@/entities/ListPageSections/ListPageSections';
import { ListPageSectionsVariant } from '@/entities/ListPageSections/model/model';

const Filtered = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const getPageFromUrl = () => {
    const urlParams = new URLSearchParams(location.search);
    const pageParam = urlParams.get('page');
    return pageParam ? parseInt(pageParam) : 1;
  };

  const { filtered, genres, keywords } = useSelector(
    (state: RootState) => state.moviesList
  );

  const [sortedBy, setSortedBy] = useState(SortedBy['Popularity Ascending']);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [page, setPage] = useState(getPageFromUrl());
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [minScore, setMinScore] = useState<number>();
  const [maxScore, setMaxScore] = useState<number>();
  const [minVote, setMinVote] = useState<number>();
  const [maxVote, setMaxVote] = useState<number>();
  const [minRuntime, setMinRuntime] = useState<number>();
  const [maxRuntime, setMaxRuntime] = useState<number>();
  const [keyword, setKeyword] = useState<string>('');
  const [selectedKeyword, setSelectedKeyword] = useState<number[]>([]);

  useEffect(() => {
    dispatch(
      getFiltered({
        page,
        sortBy: sortedBy,
        startDate,
        endDate,
        genres: selectedGenres,
        runtimeGte: minRuntime,
        runtimeLte: maxRuntime,
        voteAverageGte: minScore,
        voteAverageLte: maxScore,
        voteCountGte: minVote,
        voteCountLte: maxVote,
        keywords: selectedKeyword,
      })
    );
  }, [
    page,
    sortedBy,
    dispatch,
    startDate,
    endDate,
    selectedGenres,
    minRuntime,
    minScore,
    minVote,
    maxRuntime,
    maxScore,
    maxVote,
    selectedKeyword,
  ]);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    dispatch(getKeywords({ query: keyword }));
  }, [keyword]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    navigate(`?page=${newPage}`);
  };

  const sortedList = Object.keys(SortedBy);
  const handleSortedBy = (key: keyof typeof SortedBy) => {
    setSortedBy(SortedBy[key]);
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const handleAddGenres = (genre: number) => {
    if (selectedGenres.findIndex((g) => g === genre) === -1) {
      setSelectedGenres((prevState) => [...prevState, genre]);
    } else {
      setSelectedGenres((prevState) => prevState.filter((g) => g !== genre));
    }
  };

  const userScore = {
    min: 0,
    max: 10,
    labels: ['0', '5', '10'],
    step: 1,
    caption: 'Rated',
    captionPosition: CaptionPosition.before,
    subSteps: true,
    setMin: (min: number) => setMinScore(min),
    setMax: (max: number) => setMaxScore(max),
  };

  const voteScore = {
    min: 0,
    max: 500,
    labels: ['0', '100', '200', '300', '400', '500'],
    step: 50,
    caption: '',
    captionPosition: CaptionPosition.before,
    subSteps: false,
    setMin: (min: number) => setMinVote(min),
    setMax: (max: number) => setMaxVote(max),
  };

  const runtimeScore = {
    min: 0,
    max: 400,
    labels: ['0', '120', '240', '360'],
    step: 15,
    caption: 'minutes',
    captionPosition: CaptionPosition.after,
    subSteps: true,
    setMin: (min: number) => setMinRuntime(min),
    setMax: (max: number) => setMaxRuntime(max),
  };

  return (
    <div className="flex lg:flex-row flex-col max-w-[1400px] lg:py-[30px] py-0">
      <FiltersSection
        title={t('movies.discover')}
        sortedList={sortedList}
        handleSortedBy={handleSortedBy}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
        genres={genres?.genres || []}
        selectedGenres={selectedGenres}
        handleAddGenres={handleAddGenres}
        keywords={keywords?.results || []}
        setKeyword={setKeyword}
        setSelectedKeyword={setSelectedKeyword}
        voteScore={voteScore}
        runtimeScore={runtimeScore}
        userScore={userScore}
      />
      {filtered && (
        <ListPageSections
          variant={ListPageSectionsVariant.filter}
          className="max-w-[1150px] mt-2"
          items={filtered}
          page={page}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Filtered;
