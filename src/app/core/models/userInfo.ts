export interface UserInfo {
  accountInfo: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  personalDetails: {
    firstName: string;
    lastName: string;
    dateOfBirth?: string;
    phoneNumber?: string;
  };
  securityQuestions: {
    question1: string;
    answer1: string;
    question2: string;
    answer2: string;
  };
}
