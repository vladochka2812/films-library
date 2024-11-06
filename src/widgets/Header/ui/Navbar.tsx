import { DesktopNav } from './Navigation/DesktopNav';
import { MobileNav } from './Navigation/MobileNav';
import { RightBar } from './RightBarComponent/RightBar';

export const Navbar = () => {
  return (
    <div>
      <div className="lg:flex hidden">
        <div className="flex relative justify-between top-0 left-0 px-10 w-maxPrimaryPageWidth ">
          <DesktopNav />
          <RightBar />
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex px-5 w-[100vw]">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};
