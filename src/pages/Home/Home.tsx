import { LatestSection } from '../../entities/LatestSection/LatestSection';
import { MainSearch } from '../../entities/MainSearch/MainSearch';
import { TrendingSection } from '../../entities/TrendingSection/TrendingSection';

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center mb-20">
      <MainSearch />
      <TrendingSection />
      <LatestSection />
    </div>
  );
};

export default Home;
