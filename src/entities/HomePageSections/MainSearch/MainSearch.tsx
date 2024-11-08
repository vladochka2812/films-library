import { Input } from '@/shared/Input/Input';
import { VariantType as InputVariantType } from '@/shared/Input/model/model';
import { Button } from '@/shared/Button/Button';
import { VariantType as ButtonVariantType } from '@/shared/Input/model/model';
import { useRandomImage } from './api/useRandomImage';
import { mainImageSize, mainImages } from './model/model';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const MainSearch = () => {
  const { t } = useTranslation();
  const randomImage = useRandomImage({ images: mainImages });
  const [placeholder, setPlaceholder] = useState(
    t('mainSearch.searchPlaceholder')
  );

  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth >= 1024) {
        setPlaceholder(t('mainSearch.searchPlaceholder'));
      }
    };
    window.addEventListener('resize', updatePlaceholder);
    updatePlaceholder();
    return () => {
      window.removeEventListener('resize', updatePlaceholder);
    };
  }, [t]);

  return (
    <div className="flex justify-center lg:max-w-[1400px] w-full relative min-h-[300px] h-[calc(100vh / 2.5)] max-h-[360px]">
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
          <h1 className="text-[48px] font-bold">{t('mainSearch.welcome')}</h1>
          <p className="text-[32px] font-semibold">
            {t('mainSearch.description')}
          </p>
        </div>
        <div className="flex w-full relative">
          <Input
            placeholder={placeholder}
            type="text"
            variant={InputVariantType.ROUNDED}
          />
          <Button
            className="w-[100px] absolute right-0"
            variant={ButtonVariantType.ROUNDED}
          >
            {t('mainSearch.searchButton')}
          </Button>
        </div>
      </div>
    </div>
  );
};
