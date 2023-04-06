import UserType from "./User";

type PlayerType = {
  name: UserType["userName"] | string;
  avatar: string;
  score: number;
  isUSer: boolean;
};

export default PlayerType;
