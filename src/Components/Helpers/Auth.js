export const Auth = () => {
    const userToken = localStorage.getItem("token");
    let userInSession = userToken != null || "" || undefined ? true : false;
    return userInSession;
  };