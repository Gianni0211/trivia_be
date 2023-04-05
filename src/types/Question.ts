import Answer from "./Answer";
import User from "./User";

type Question = {
  id: number;
  title: string;
  category: string;
  user: User | null;
  answers: Answer[];
  level: string | null;
  isPublic: boolean;
};

export default Question;
