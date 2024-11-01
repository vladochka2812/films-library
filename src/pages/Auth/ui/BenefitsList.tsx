import { benefitsList } from '../model/model';
import { FaCheck } from 'react-icons/fa';
import classNames from 'classnames';

export const BenefitsList = () => {
  return (
    <div className="flex flex-col w-full md:min-w-[280px] md:w-[280px] md:border border-b md:rounded-lg">
      <h3 className="flex font-semibold p-5 text-white bg-lightBlue md:rounded-t-lg text-[19px]">
        Benefits of being a member
      </h3>
      <ul className="py-2 w-full">
        {benefitsList.map((benefit, index) => (
          <li
            className={classNames('flex px-5 leading-6 text-[16px] ', {
              'mt-2.5': index !== 0,
            })}
            key={index}
          >
            <FaCheck className="mr-2 mt-1" />
            <div className="md:w-[230px] w-full max-w-[500px] sm:w-[600px]">
              {benefit}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
