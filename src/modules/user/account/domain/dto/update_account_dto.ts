import { Profile } from "../../../profile/domain/model/profile";

interface UpdateAccountDTO {
  username: string;
  email: string;
  phone: string;
  password: string;
  profile: Profile[];
  isActive: boolean;
  isResetPassword: boolean;
}

export { UpdateAccountDTO };
