import { BadRequestError } from "../../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../../core/error/base_error";
import {
  Failure,
  Result,
  Success,
} from "../../../../../core/tools/result_type";

interface RoleProps {
  id: string;
  role: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

class Role {
  private props: RoleProps;

  get id() {
    return this.props.id;
  }

  get role() {
    return this.props.role;
  }

  get description() {
    return this.props.description;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  constructor(props: RoleProps) {
    this.props = props;
  }

  validations(props: this): Result<boolean> {
    if (props.role.length < 3) {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.stringValidation,
          "Role title is empty",
          "Validation for role title is return error",
        ),
      );
    }

    if (props.description.length < 3) {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.stringValidation,
          "Role description is empty",
          "Validation for role descript is return error",
        ),
      );
    }

    return Success(true);
  }
}

export { RoleProps, Role };
