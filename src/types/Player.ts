import User from "./User";

type Player = {
  name: User["userName"] | string;
  avatar: string;
  score: number;
  isUSer: boolean;
};

export default Player;
