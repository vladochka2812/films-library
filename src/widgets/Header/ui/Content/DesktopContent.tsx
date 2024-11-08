import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigationList } from '../../model/model';

export const DesktopContent = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleOpen = (index: any) => {
    setOpenDropdownIndex(index);
  };
  const handleClose = () => {
    setOpenDropdownIndex(null);
  };
  const NavigationList = useNavigationList();

  return NavigationList.map((navLink, index) => (
    <div
      key={navLink.mainCategory}
      className="relative mr-4 p-2 cursor-pointer"
      onMouseEnter={() => handleOpen(index)}
      onMouseLeave={handleClose}
    >
      <span className="text-white font-semibold">{navLink.mainCategory}</span>
      <ul
        className={`${
          openDropdownIndex === index ? 'flex' : 'hidden'
        } absolute flex-col top-[40px] left-0 max-h-[480px] w-[173px] bg-white rounded py-2 border border-gray-200 leading-6`}
      >
        {navLink.subCategories.map((subCategory, subIndex) => (
          <li
            key={subIndex}
            className="p-2 hover:bg-gray-100 py-[3px] pl-6 pr-16 text-nowrap"
          >
            <Link to={subCategory.link} className="text-black">
              {subCategory.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ));
};
