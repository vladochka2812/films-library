import { useState, useEffect, useRef } from 'react';
import { Navbar } from './ui/Navbar';

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isShowHeaderState =
        currentScrollY < lastScrollY.current || currentScrollY <= 50;
      setShowHeader(isShowHeaderState);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`flex w-full justify-center items-center fixed top-0 left-0 text-[16px] text-text bg-darkBlue h-16 z-50 transition-transform duration-200 ease-linear ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Navbar />
    </header>
  );
};
