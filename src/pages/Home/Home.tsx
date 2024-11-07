import { LatestSection } from '@/entities/HomePageSections/LatestSection/LatestSection';
import { MainSearch } from '@/entities/HomePageSections/MainSearch/MainSearch';
import { PopularSection } from '@/entities/HomePageSections/PopularSection/PopularSection';
import { TopRatedSection } from '@/entities/HomePageSections/TopRatedSection/TopRatedSection';
import { TrendingSection } from '@/entities/HomePageSections/TrendingSection/TrendingSection';

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center mb-20">
      <MainSearch />
      <TrendingSection />
      <LatestSection />
      <PopularSection />
      <TopRatedSection />
    </div>
  );
};

export default Home;
