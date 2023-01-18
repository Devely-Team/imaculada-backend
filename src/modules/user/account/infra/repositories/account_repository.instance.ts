import { DatabaseError } from "../../../../../core/error/database_error";
import {
  DatabaseClient,
  databaseClientSingleton,
} from "../../../../../core/prisma/prisma_client";
import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../../core/tools/result_type";
import { Account } from "../../domain/model/account_model";
import { AccountRepository } from "./account_repository";

class AccountRepositoryInstance implements AccountRepository {
  constructor(private client: DatabaseClient) {}

  create(account: Account): AsyncResult<string> {
    return this.client.clientPrisma.user
      .create({
        data: {
          birthDay: account.birthDay,
          email: account.email,
          name: account.name,
          password: account.password,
          userName: account.userName,
          roleId: account.roleId,
        },
      })
      .then(result => Success(result.id))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
  listAll(): AsyncResult<Account[]> {
    return this.client.clientPrisma.user
      .findMany()
      .then(result => Success(result as Account[]))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
  findById(id: string): AsyncResult<Account> {
    return this.client.clientPrisma.user
      .findUnique({ where: { id } })
      .then(result => Success(result as Account))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
  update(account: Account): AsyncResult<boolean> {
    return this.client.clientPrisma.user
      .update({
        where: { id: account.id },
        data: {},
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
  delete(id: string): AsyncResult<boolean> {
    return this.client.clientPrisma.user
      .delete({ where: { id } })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
}

const singletonAccountRepository = new AccountRepositoryInstance(
  databaseClientSingleton,
);

export { singletonAccountRepository };
