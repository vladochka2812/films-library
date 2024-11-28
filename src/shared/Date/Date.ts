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

export const fullDate = (dateString: string) => {
  const date = new Date(dateString);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return formattedDate;
};

export const getAge = (birthDate: string, comparisonDate?: string) => {
  const birth = new Date(birthDate);
  const compareDate = comparisonDate ? new Date(comparisonDate) : new Date();

  let age = compareDate.getFullYear() - birth.getFullYear();
  if (
    compareDate.getMonth() < birth.getMonth() ||
    (compareDate.getMonth() === birth.getMonth() &&
      compareDate.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
};
