const storage = {
  store: (user) => {
    localStorage.setItem(`${process.env.REACT_APP_TOKEN_PREFIX}TOKEN`, user.accessToken);
  },
  getToken: () => localStorage.getItem(`${process.env.REACT_APP_TOKEN_PREFIX}TOKEN`),
  clear: () => {
    localStorage.removeItem(`${process.env.REACT_APP_TOKEN_PREFIX}TOKEN`);
  }
};

export default storage;