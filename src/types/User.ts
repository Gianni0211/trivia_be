import Question from "./Question";

type User = {
  id: number;
  userName: string;
  password: string;
  questions: Question[];
};
export default User;
