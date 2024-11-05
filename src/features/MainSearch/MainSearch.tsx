import React from 'react';
import { Input } from '../../shared/Input/Input';
import { VariantType as InputVariantType } from '../../shared/Input/model/model';
import { Button } from '../../shared/Button/Button';
import { VariantType as ButtonVariantType } from '../../shared/Button/model/model';
import { useRandomImage } from './api/useRandomImage';
import { mainImageSize, mainImages } from './model/model';

export const MainSearch = () => {
  const randomImage = useRandomImage({ images: mainImages });

  return (
    <div className="flex md:w-maxPrimaryPageWidth w-full relative min-h-[300px] h-[calc(100vh / 2.5)] max-h-[360px]">
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_IMAGE_API_LINK}/${mainImageSize}/${randomImage})`,
          filter:
            'grayscale(10%) brightness(0.4) sepia(100%) hue-rotate(180deg) saturate(500%)',
        }}
      />
      <div className="relative z-20 flex flex-col w-full items-start max-w-maxPrimaryPageWidth h-full px-[30px] py-10 ">
        <div className="mb-5 text-white">
          <h1 className="text-[48px] font-bold">Welcome.</h1>
          <p className="text-[32px] font-semibold">
            Millions of movies, TV shows, and people to discover. Explore now.
          </p>
        </div>
        <div className="flex w-full relative">
          <Input
            placeholder="Search for a movie, tv show, person......"
            type="text"
            variant={InputVariantType.ROUNDED}
          />
          <Button
            className="w-[100px] absolute right-0"
            variant={ButtonVariantType.ROUNDED}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
