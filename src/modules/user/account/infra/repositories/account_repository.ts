import { AsyncResult } from "../../../../../core/tools/result_type";
import { Account } from "../../domain/model/account";

interface AccountReposity {
  create(account: Account): AsyncResult<string>;
  listAll(): AsyncResult<Account[]>;
  findById(id: string): AsyncResult<Account>;
  findByEmail(email: string): AsyncResult<Account>;
  update(account: Account): AsyncResult<boolean>;
  delete(id: string): AsyncResult<boolean>;
}

export { AccountReposity };
