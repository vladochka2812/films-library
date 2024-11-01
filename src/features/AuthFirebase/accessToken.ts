export const handleSaveAccessToken = ({ token }: { token: string }) => {
  localStorage.setItem('accessToken', token);
};

export const handleDeleteAccessToken = () => {
  localStorage.removeItem('accessToken');
};
