export const handleSaveAccessToken = ({
  token,
  name,
}: {
  token: string;
  name: string;
}) => {
  localStorage.setItem('accessToken', token);
  localStorage.setItem('username', name);
};

export const handleDeleteAccessToken = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('username');
};
