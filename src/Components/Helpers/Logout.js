export const Logout = (navigate) => {
  localStorage.clear();
  navigate('/');
  window.location.reload(true)
};
