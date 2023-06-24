const validatePassword = (password: string) => {
  if (password) {
    const patternCnt = [
      { type: /^(?=.*?[a-zA-Z])/ },
      { type: /^(?=.*?[0-9]).{8,16}$/ },
      { type: /^(?=.*?[#?!@$%^&*-])/ },
    ].filter((item) => {
      return item.type.test(password);
    }).length;
    return patternCnt < 3 ? false : true;
  }
  return true;
};

const validateEmail = (email: string) => {
  if (email)
    return !/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
      ? false
      : true;
  return true;
};

const validateCount = (count: number) => {
  if (count) {
    if (count < 0) return false;
    if (count > 10) return false;
  }
  return true;
};

const validateBirthday = (birthday: string) => {
  if (birthday)
    return /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/.test(birthday)
      ? true
      : false
  return true;
}

const validateNick = (nick: string) => {
  if (nick) {
    const patternCnt = [
      { type: /^(?=.*?[가-힣])/ },
      { type: /^.{3,8}$/ },
    ].filter((item) => {
      return item.type.test(nick);
    }).length;
    return patternCnt < 2 ? false : true;
  }
  return true;
};

const validatePhoneNumber = (phonenumber: string) => {
  if(phonenumber) 
    return /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(phonenumber)
      ? true
      : false
  return true;
}

const validatePasswordCheck = (
  password: string | undefined,
  passwordCheck: string | undefined
) =>
  password !== passwordCheck
    ? "비밀번호가 확인값과 다릅니다. 다시입력 해주세요."
    : null;

export {
  validatePassword,
  validateEmail,
  validateNick,
  validatePasswordCheck,
  validateCount,
  validateBirthday,
  validatePhoneNumber
};

