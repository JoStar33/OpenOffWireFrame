interface User {
  nickname: string;
  name: string;
  profileImage?: string;
  interestArea: string;
  interestField: string[];
  birthday: string;
  gender: "남" | "여";
  phoneNumber: string;
  email: string;
};

export type { User };

