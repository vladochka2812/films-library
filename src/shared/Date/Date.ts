export const dateUsual = (date: string) => {
  const [year, month, day] = date?.split('-');
  return `${day}/${month}/${year}`;
};

export const getYear = (date: string) => {
  return date?.split('-')[0];
};

export const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
