const checkUser = (user: string, users: string[]) => {
  if (user === users[0]) {
    return 'X';
  } else {
    return '0';
  }
};
