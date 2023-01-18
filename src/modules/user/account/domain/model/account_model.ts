import { BadRequestError } from "../../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../../core/error/base_error";
import {
  Failure,
  Result,
  Success,
} from "../../../../../core/tools/result_type";

interface AccountProps {
  id: string;
  email: string;
  password: string;
  name: string;
  userName: string;
  birthDay: Date;
  roleId: string;
  createdAt: Date;
  updatedAt: Date;
}

class Account {
  private props: AccountProps;

  get id() {
    return this.props.id;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get name() {
    return this.props.name;
  }

  get userName() {
    return this.props.userName;
  }

  get birthDay() {
    return this.props.birthDay;
  }

  get roleId() {
    return this.props.roleId;
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

  validations(props: this): Result<boolean> {
    if (props.name.length < 3) {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.stringValidation,
          "UserAccount name is empty",
          "Validation for name is return error",
        ),
      );
    }

    if (props.userName.length < 3) {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.stringValidation,
          "UserAccount username is empty",
          "Validation for username is return error",
        ),
      );
    }

    if (props.email.length < 3) {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.stringValidation,
          "UserAccount email is empty",
          "Validation for email is return error",
        ),
      );
    }

    if (props.password.length < 7) {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.stringValidation,
          "UserAccount password is empty",
          "Validation for password is return error",
        ),
      );
    }

    return Success(true);
  }
}

export { Account, AccountProps };
