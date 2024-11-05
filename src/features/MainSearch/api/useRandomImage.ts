export const useRandomImage = ({ images }: { images: string[] }) => {
  return images[Math.floor(Math.random() * images.length)];
};
