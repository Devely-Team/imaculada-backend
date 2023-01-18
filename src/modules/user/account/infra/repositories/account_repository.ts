import { AsyncResult } from "../../../../../core/tools/result_type";
import { Account } from "../../domain/model/account_model";

interface AccountRepository {
  create(account: Account): AsyncResult<string>;
  listAll(): AsyncResult<Account[]>;
  findById(id: string): AsyncResult<Account>;
  update(account: Account): AsyncResult<boolean>;
  delete(id: string): AsyncResult<boolean>;
}

export { AccountRepository };
