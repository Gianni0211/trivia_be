import Question from "./Question";

type UserType = {
  id?: any;
  userName: string;
  password: string;
  questions?: Question[];
};
export default UserType;
