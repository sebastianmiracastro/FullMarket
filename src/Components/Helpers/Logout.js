export const Logout = (navigate) => {
  localStorage.clear();
  navigate('/');
};
