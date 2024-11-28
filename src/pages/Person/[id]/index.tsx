import { useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/app/store/store';
import { useParams } from 'react-router-dom';
import { getPerson } from './api/get/getPerson';
import { PersonPageSections } from '@/entities/PersonPageSections/PersonPageSections';
import { fullDate, getAge } from '@/shared/Date/Date';
import { getSocial } from './api/get/getSocial';
import { SocialLinks, YearsGroupsType, mainImageSize } from '../model/model';
import {
  FaLink,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';
import {
  JobType,
  SocialInfoType,
  SocialType,
} from '@/shared/Person/model/model';
import {
  femalePlaceHolder,
  malePlaceHolder,
} from '@/shared/CastCrewCard/model/model';
import { getCredits } from './api/get/getCredits';
import useCreditsList from './api/hooks/useCreditsList';
import { useActingList } from './api/hooks/useActingList';
import { useJobsList } from './api/hooks/useJobsList';

const Person = () => {
  const { t } = useTranslation();

  const { id } = useParams();
  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  const { person, social, credits } = useSelector(
    (state: RootState) => state.personInfo
  );

  const {
    gender,
    birthday,
    place_of_birth,
    also_known_as,
    deathday,
    known_for_department,
    profile_path,
    name,
    biography,
  } = person;

  const { cast, crew } = credits;

  const genders = [
    'Not set / not specified',
    t('person.female'),
    t('person.male'),
    'Non-binary',
  ];

  useEffect(() => {
    dispatch(getPerson({ path }));
    dispatch(getSocial({ path }));
    dispatch(getCredits({ path }));
  }, [path, dispatch]);

  const groupByYear = (items: JobType[]): YearsGroupsType => {
    return items.reduce<YearsGroupsType>((acc, item) => {
      const year = item.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(item);
      return acc;
    }, {} as YearsGroupsType);
  };

  const info = {
    knowingFor: known_for_department,
    knownAs: also_known_as,
    dayOfDeath:
      deathday &&
      `${fullDate(deathday)} (${getAge(birthday, deathday)} years old)`,
    birthday: `${fullDate(birthday)}  (${getAge(birthday)} years old)`,
    place: place_of_birth,
    gender: genders[gender],
  };

  const socialList: SocialInfoType = {
    items: [
      social?.facebook_id && {
        link: `${SocialLinks.Facebook}${social.facebook_id}`,
        text: 'Visit Facebook',
        icon: <FaFacebookF size={30} />,
      },
      social?.instagram_id && {
        link: `${SocialLinks.Instagram}${social.instagram_id}`,
        text: 'Visit Instagram',
        icon: <FaInstagram size={30} />,
      },
      social?.tiktok_id && {
        link: `${SocialLinks.TikTok}${social.tiktok_id}`,
        text: 'Visit Tiktok',
        icon: <FaTiktok size={26} />,
      },
      social?.twitter_id && {
        link: `${SocialLinks.Twitter}${social.twitter_id}`,
        text: 'Visit Twitter',
        icon: <FaTwitter size={30} />,
      },
      social?.youtube_id && {
        link: `${SocialLinks.YouTube}${social.youtube_id}`,
        text: 'Visit YouTube',
        icon: <FaYoutube size={30} />,
      },
    ].filter(Boolean) as SocialType[],
    home: person.homepage
      ? {
          link: person.homepage,
          text: 'Visit Homepage',
          icon: <FaLink size={28} />,
        }
      : undefined,
  };

  const mainImage = profile_path
    ? `${import.meta.env.VITE_IMAGE_API_LINK}/${mainImageSize}/${profile_path}`
    : gender === 1
      ? femalePlaceHolder
      : malePlaceHolder;

  const creditsList = cast && useCreditsList(cast);

  const actingList = cast && useActingList(cast);

  const acting = actingList && groupByYear(actingList);

  const jobs = useJobsList(crew);

  const jobGroup =
    jobs &&
    Object.keys(jobs)?.reduce<{
      [key: string]: YearsGroupsType;
    }>((acc, department) => {
      acc[department] = groupByYear(jobs[department]);
      return acc;
    }, {});

  return (
    <PersonPageSections
      info={info}
      social={socialList}
      image={mainImage}
      name={name}
      biography={biography}
      credits={creditsList}
      acting={acting}
      jobs={jobGroup}
    />
  );
};

export default Person;
