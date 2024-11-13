import { FaStar } from 'react-icons/fa';

export const Rate = ({ rate }: { rate: number }) => {
  return (
    <div className="bg-darkBlue text-[14px] rounded-md text-white flex items-center px-2 gap-3">
      <FaStar color="white" />
      <span>{rate}%</span>
    </div>
  );
};
