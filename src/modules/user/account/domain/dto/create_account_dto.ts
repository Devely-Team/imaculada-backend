import { Profile } from "../../../profile/domain/model/profile";

interface CreateAccountDTO {
  username: string;
  email: string;
  phone: string;
  password: string;
  profile: Profile[];
}

export { CreateAccountDTO };
