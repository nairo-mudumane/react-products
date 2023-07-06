const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

function isValid(pass: string): boolean {
  if (!pass || pass === "") {
    return false;
  }

  const match = regex.test(pass);
  return match;
}

export default { regex, isValid };
