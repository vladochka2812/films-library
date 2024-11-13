export type MainInfoType = {
  mainImageHref: string;
  bgImageHref: string;
  name: string;
  overview: string;
  vote: number;
  tagline: string;
  date: string;
  year: string;
  genresList: string;
  timing: string;
  production: string[];
  createdBy?: { name: string; link: string }[];
};

export type SubInfoType = {
  homepage: string;
  language: string;
  budget?: string;
  revenue?: string;
  status: string;
  network?: string[];
  type?: string;
};

export type CollectionType = {
  link: string;
  name: string;
  bgImage: string;
};

export type SeasonType = {
  image: string;
  rate: number;
  date: string;
  season: string;
  overview: string;
  episodes: number;
  year: number;
};

export type EpisodeType = {
  image: string;
  rate: number;
  date: string;
  overview: string;
  episodeNumber: number;
  runtime: string;
  episodeName: string;
};
