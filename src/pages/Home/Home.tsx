import { MainSearch } from '../../features/MainSearch/MainSearch';
import { TrendingSection } from '../../entities/TrendingSection/TrendingSection';

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <MainSearch />
      <TrendingSection />
    </div>
  );
};

export default Home;
