import { Profile } from "../../../profile/domain/model/profile";

interface AccountProps {
  id: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  profile: Profile[];
  isActive: boolean;
  isResetPassword: boolean;
  createdAt: Date;
  updatedAt: Date;
}

class Account {
  private props: AccountProps;

  get id() {
    return this.props.id;
  }

  get profile() {
    return this.props.profile;
  }

  get username() {
    return this.props.username;
  }

  get email() {
    return this.props.email;
  }

  get isActive() {
    return this.props.isActive;
  }

  get isResetPassword() {
    return this.props.isResetPassword;
  }

  get phone() {
    return this.props.phone;
  }

  get password() {
    return this.props.password;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  constructor(props: AccountProps) {
    this.props = props;
  }
}

export { AccountProps, Account };
