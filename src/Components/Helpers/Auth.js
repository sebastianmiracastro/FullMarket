
export const Auth = () => {
    const userToken = localStorage.getItem("token");
    let userInSession = userToken != null || "" || undefined ? true : false;
    console.log("🚀 ~ file: AuthUser.js ~ line 5 ~ AuthUser ~ userInSession", userInSession)
    return userInSession;
  };