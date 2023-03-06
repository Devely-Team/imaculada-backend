import { AsyncResult } from "../../../../../core/tools/result_type";
import { Profile } from "../../../profile/domain/model/profile";
import { Account } from "../../domain/model/account";

interface AccountReposity {
  create(account: Account): AsyncResult<string>;
  listAll(): AsyncResult<Account[]>;
  findById(id: string): AsyncResult<Account>;
  findByEmail(email: string): AsyncResult<Account>;
  update(account: Account): AsyncResult<boolean>;
  updateProfile(id: string, profiles: Profile[]): AsyncResult<boolean>;
  updatePassword(id: string, password: string): AsyncResult<boolean>;
  updateResetPassword(
    id: string,
    isResetPassword: boolean,
  ): AsyncResult<boolean>;
  updateActive(id: string, isActive: boolean): AsyncResult<boolean>;
  delete(id: string): AsyncResult<boolean>;
}

export { AccountReposity };
