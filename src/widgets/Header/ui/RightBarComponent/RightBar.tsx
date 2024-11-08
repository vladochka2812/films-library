import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { Tooltip } from '@/shared/Tooltip/Tooltip';
import { AddList } from '../../model/model';
import { LanguageButton } from './LanguageButton';
import { User } from './User';
import { Notification } from './Notification';
import { Search } from './Search';

export const RightBar = () => {
  return (
    <div className="flex justify-end cursor-pointer">
      <ul className="flex  items-center">
        <li className="relative">
          <Tooltip
            position="bottom"
            content={AddList.map((item, index) => (
              <div
                className="hover:bg-darkBlue hover:text-white p-1 w-full text-nowrap"
                key={index}
              >
                <Link
                  to={item.link}
                  className="font-semibold text-[13px] px-5 py-1.5"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          >
            <FaPlus className="text-white hidden lg:flex" size={20} />
          </Tooltip>
        </li>
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
