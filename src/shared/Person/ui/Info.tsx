import { useTranslation } from 'react-i18next';
import { InfoType } from '../model/model';
import { InfoItem } from './InfoItem';

export const Info = ({
  knowingFor,
  knownAs,
  birthday,
  place,
  gender,
  dayOfDeath,
}: InfoType) => {
  const { t } = useTranslation();

  return (
    <div className="text-black">
      <h3 className="flex flex-col font-semibold text-[1.3rem] mb-2">
        {t('person.personalInfo')}
      </h3>

      <InfoItem title={t('person.knownFor')} content={knowingFor} />
      <InfoItem title={t('person.gender')} content={gender} />
      <InfoItem title={t('person.birthday')} content={birthday} />

      {dayOfDeath && (
        <InfoItem title={t('person.dateOfDeath')} content={dayOfDeath} />
      )}

      <InfoItem title={t('person.placeOfBirth')} content={place} />

      <InfoItem
        title={t('person.alsoKnownAs')}
        content={
          <ul>
            {knownAs?.map((item, index) => (
              <li key={index} className="mt-2">
                {item}
              </li>
            ))}
          </ul>
        }
      />
    </div>
  );
};
