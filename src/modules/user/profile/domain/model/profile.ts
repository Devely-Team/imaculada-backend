import { BadRequestError } from "../../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../../core/error/base_error";
import {
  Failure,
  Result,
  Success,
} from "../../../../../core/tools/result_type";

interface ProfileProps {
  id: string;
  profile: string;
  description: string;
  route: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string | null;
}

class Profile {
  private props: ProfileProps;

  get id() {
    return this.props.id;
  }

  get profile() {
    return this.props.profile;
  }

  get description() {
    return this.props.description;
  }

  get route() {
    return this.props.route;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get userId() {
    return this.props.userId;
  }

  constructor(props: ProfileProps) {
    this.props = props;
  }

  validations(props: this): Result<boolean> {
    if (props.route.length < 3) {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.stringValidation,
          "Route title is empty",
          "Validation for route title is return error",
        ),
      );
    }

    if (props.route[0] !== "/") {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.stringValidation,
          "Route title is empty",
          "Validation for route title is return error",
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

export { ProfileProps, Profile };
