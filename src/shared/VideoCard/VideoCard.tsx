import { FaPlay } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { VideoCardType } from './model/model';

export const VideoCard = ({ name, image, type, date, link }: VideoCardType) => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-[200px] lg:w-full w-[352px] border rounded-lg">
      <div className="w-[350px] h-[200px] relative ">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full lg:rounded-l-lg rounded-t-lg"
        />
        <div className="w-[67px] h-[67px] flex items-center justify-center absolute top-[50%] left-[42%] bg-black/70 rounded-full">
          <FaPlay size={24} color="white" />
        </div>
      </div>
      <div className="py-2.5 px-4">
        <a target="_blank" href={link}>
          <h2 className="text-[1.1rem] font-semibold hover:text-black/70">
            {name}
          </h2>
        </a>
        <div className="flex items-center">
          <span>{type}</span>
          <GoDotFill className="mx-2" size={10} />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};
