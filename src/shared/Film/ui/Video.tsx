import { FaPlay } from 'react-icons/fa';

export const Video = ({ video }: { video: string }) => {
  const imageUrl = `${import.meta.env.VITE_YOUTUBE_PHOTO_LINK}/${video}/${import.meta.env.VITE_YOUTUBE_PHOTO_NAME}`;

  return (
    <div
      className="lg:min-w-[533px] lg:w-[533px] lg:min-h-[300px] lg:h-[300px] min-w-[250px] w-[250px] min-h-[141px] h-[141px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <a
        href={`${import.meta.env.VITE_YOUTUBE_VIDEO}/${video}`}
        className="flex w-full h-full items-center justify-center"
      >
        <div className="w-[67px] h-[67px] flex items-center justify-center bg-black/70 rounded-full">
          <FaPlay size={24} color="white" />
        </div>
      </a>
    </div>
  );
};
