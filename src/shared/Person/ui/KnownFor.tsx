import { useTranslation } from 'react-i18next';
import { HorizontalScrollWrapper } from '@/shared/HorizontalScrollWrapper/HorizontalScrollWrapper';
import { HorizontalScrollWrapperVariant } from '@/shared/HorizontalScrollWrapper/model/model';
import { KnownForType } from '../model/model';

interface KnownForProps {
  items: KnownForType;
}

export const KnownFor = ({ items }: KnownForProps) => {
  const { t } = useTranslation();

  return (
    <div className="mt-[30px]">
      <h3 className="text-[1.3rem] font-semibold mb-2">
        {t('person.knownFor')}
      </h3>
      <HorizontalScrollWrapper variant={HorizontalScrollWrapperVariant.simple}>
        <div className="flex  gap-5 pb-4">
          {!!items?.length &&
            items?.map((item, index) => (
              <div key={index} className="flex-none">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[120px] h-[180px] object-cover rounded-lg"
                />
                <p className="text-center text-wrap max-w-[120px] mt-2">
                  {item.name}
                </p>
              </div>
            ))}
        </div>
      </HorizontalScrollWrapper>
    </div>
  );
};
