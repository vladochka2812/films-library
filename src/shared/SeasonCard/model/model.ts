export type SeasonType = {
  image: string;
  rate: number;
  date: string;
  season: string;
  overview: string;
  episodes: number;
  year: string;
  variant?: SeasonCardVariant;
};

export enum SeasonCardVariant {
  outline = 'outline',
  default = 'default',
}
