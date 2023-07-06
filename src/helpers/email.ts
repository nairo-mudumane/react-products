const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function test(str: string): boolean {
  if (str === "") {
    return false;
  }

  const match = String(str).toLowerCase().match(regex);
  if (match && match.length > 0) {
    return true;
  }

  return false;
}

export default { regex, test };
