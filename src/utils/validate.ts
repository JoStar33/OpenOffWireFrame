const validatePassword = (password: string) => {
  if (password) {
    const patternCnt = [
      { type: /^(?=.*?[a-zA-Z])/ },
      { type: /^(?=.*?[0-9]).{8,16}$/ },
      { type: /^(?=.*?[#?!@$%^&*-])/ },
    ].filter((item) => {
      return item.type.test(password);
    }).length;
    return patternCnt < 3 ? "비밀번호는 영문, 특수문자, 숫자를 포함한 9 ~ 16자리를 입력해야합니다." : undefined;
  }
  return undefined;
};

const validateEmail = (email: string) => {
  if (email)
    return !/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
      ? "이메일 형식에 맞지않습니다. 다시 입력해주세요."
      : undefined;
  return undefined;
};

const validateCount = (count: number) => {
  if (count) {
    if (count < 0) return false;
    if (count > 10) return false;
  }
  return undefined;
};

const validateBirthday = (birthday: string) => {
  if (birthday)
    return /^(19|20)\d\d-(0[1-9]|1[0-2])-([0-2][1-9]|3[0-1])$/.test(birthday)
      ? undefined
      : "생년월일 형식으로 작성해주세요!"
  return undefined;
}

const validateName = (name: string) => {
  if (name) {
    const patternCnt = [
      { type: /^(?=.*?[가-힣])/ },
      { type: /^.{3,8}$/ },
    ].filter((item) => {
      return item.type.test(name);
    }).length;
    return patternCnt < 2 ? "이름은 한글로만 구성해주세요." : undefined;
  }
  return undefined;
};

const validatePhoneNumber = (phonenumber: string) => {
  if(phonenumber) 
    return /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(phonenumber)
      ? undefined
      : "핸드폰 형식에 맞지않습니다. 다시 입력해주세요."
  return undefined;
}

const validateAuthNumber = (phonenumber: string) => {
  if(phonenumber) 
    return /^\d{4,6}$/.test(phonenumber)
      ? undefined
      : "인증번호 형식에 맞지않습니다."
  return undefined;
}

const validatePasswordCheck = (
  password: string | undefined,
  passwordCheck: string | undefined
) =>
  password !== passwordCheck
    ? "비밀번호가 확인값과 다릅니다. 다시입력 해주세요."
    : undefined;

export {
  validateAuthNumber, validateBirthday, validateCount, validateEmail,
  validateName, validatePassword, validatePasswordCheck, validatePhoneNumber
};

