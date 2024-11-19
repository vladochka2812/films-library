export type ImageType = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};
export enum ImageCardVariant {
  poster = 'poster',
  backdrop = 'backdrop',
}
export type ImageCardType = {
  height: number;
  file_path: string;
  width: number;
  type: ImageCardVariant;
};

export const posterImageSize = 'w220_and_h330_face';
export const backdropImageSize = 'w500_and_h282_face';
export const originalImageSize = 'original';
