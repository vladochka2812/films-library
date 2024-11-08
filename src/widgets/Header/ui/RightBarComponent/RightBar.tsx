import { Notification } from './Notification';
import { LanguageButton } from './LanguageButton';
import { User } from './User';
import { Search } from './Search';

export const RightBar = () => {
  return (
    <div className="flex justify-end cursor-pointer">
      <ul className="flex  items-center">
        <li className="ml-[30px] py-1 hidden lg:flex">
          <LanguageButton />
        </li>

        <li className="lg:ml-[30px] ml-[14px] py-1">
          <Notification />
        </li>

        <li className="lg:ml-[30px] ml-[14px] py-1">
          <User />
        </li>

        <li className="lg:ml-[30px] ml-[14px] py-1">
          <Search />
        </li>
      </ul>
    </div>
  );
};
