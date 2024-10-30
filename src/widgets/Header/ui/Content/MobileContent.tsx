import { Link } from 'react-router-dom';
import { NavigationList } from '../../model/model';
import { Accordion } from '../../../../shared/Accordion/Accordion';

export const MobileContent = ({ handleClose }: { handleClose: () => void }) => {
  const liStyle = 'text-[16px] text-white/60 font-semibold pb-[10px]';
  return (
    <div>
      {NavigationList.slice(0, 3).map((navLink, index) => (
        <Accordion
          className="pb-[10px]"
          trigger={
            <span className="text-white font-semibold text-[20px]">
              {navLink.mainCategory}
            </span>
          }
          key={index}
        >
          <ul className="mt-[10px] mb-[20px]">
            {navLink.subCategories.map((subCategory, subIndex) => (
              <li key={subIndex} className="pb-[10px] text-nowrap">
                <Link
                  to={subCategory.link}
                  onClick={handleClose}
                  className="text-[16px] text-white"
                >
                  {subCategory.name}
                </Link>
              </li>
            ))}
          </ul>
        </Accordion>
      ))}

      <ul>
        <li className={liStyle}>
          <Link to={'/bible'}>Contribution Bible</Link>
        </li>
        {NavigationList[3].subCategories.map((subCategory, subIndex) => (
          <li key={subIndex} className={liStyle}>
            <Link to={subCategory.link} onClick={handleClose}>
              {subCategory.name}
            </Link>
          </li>
        ))}
        <li className={liStyle}>
          <Link to={'/about'}>About</Link>
        </li>
      </ul>
      <div className={`mt-[10px] ${liStyle}`}>Logout</div>
    </div>
  );
};
