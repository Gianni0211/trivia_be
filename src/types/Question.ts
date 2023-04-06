import Answer from "./Answer";
import UserType from "./User";

type QuestionType = {
  id?: any;
  title: string;
  category: string;
  user?: UserType | null;
  answers: Answer[];
  level?: string | null;
};

export default QuestionType;
