import { Navbar } from './ui/Navbar';

export const Header = () => {
  return (
    <header className="flex w-full justify-center items-center fixed top-0 left-0 text-[16px] text-text bg-darkBlue h-16 z-50 transition-top duration-200 ease-linear">
      <Navbar />
    </header>
  );
};
