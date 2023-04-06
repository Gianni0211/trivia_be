import QuestionType from "./Question";
import UserType from "./User";

type QuizType = {
  id?: any;
  user?: UserType | null;
  questions: QuestionType[];
  category: string;
  maxQuestions?: number;
  level?: string;
  isPublic?: boolean;
};

export default QuizType;
