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
  keywords: { link: string; name: string }[];
};

export type CollectionType = {
  link: string;
  name: string;
  bgImage: string;
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

export type MediaType = {
  videos: string[];
  posters: string[];
  backdrops: string[];
  videoAmount: string;
  postersAmount: string;
  backdropsAmount: string;
};
