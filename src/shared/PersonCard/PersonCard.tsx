import {
  PersonCardType,
  PersonCardVariant,
  imageCardSmallSize,
} from './model/model';

export const PersonCard = ({
  person,
  variant = PersonCardVariant.default,
}: PersonCardType) => {
  const { name, profile_path } = person;
  const imageHref = `${import.meta.env.VITE_IMAGE_API_LINK}/${imageCardSmallSize}/${profile_path}`;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <img
          src={imageHref}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="font-semibold text-[16px] text-nowrap">{name}</h4>
    </div>
  );
};
