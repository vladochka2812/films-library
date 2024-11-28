import { useTranslation } from 'react-i18next';
import { InfoType } from '../model/model';

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
      <span className="font-[1rem] mb-5 flex flex-col">
        <h5 className="font-semibold">{t('person.knownFor')}</h5>
        <p>{knowingFor}</p>
      </span>

      <span className="flex flex-col font-[1rem] mb-5">
        <h5 className="font-semibold">{t('person.gender')}</h5>
        <p>{gender}</p>
      </span>

      <span className="flex flex-col font-[1rem] mb-5">
        <h5 className="font-semibold">{t('person.birthday')}</h5>
        <p>{birthday}</p>
      </span>

      {dayOfDeath && (
        <span className="flex flex-col font-[1rem] mb-5">
          <h5 className="font-semibold">{t('person.dateOfDeath')}</h5>
          <p>{dayOfDeath}</p>
        </span>
      )}

      <span className="flex flex-col font-[1rem] mb-5">
        <h5 className="font-semibold">{t('person.placeOfBirth')}</h5>
        <p>{place}</p>
      </span>

      <span className="flex flex-col font-[1rem] mb-5">
        <h5 className="font-semibold">{t('person.alsoKnownAs')}</h5>
        <ul>
          {knownAs?.map((item, index) => (
            <li key={index} className="mt-2">
              {item}
            </li>
          ))}
        </ul>
      </span>
    </div>
  );
};
