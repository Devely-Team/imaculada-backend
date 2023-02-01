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
import { Account } from "../../domain/model/account";
import { AccountReposity } from "./account_repository";

class AccountReposityInstance implements AccountReposity {
  constructor(private client: DatabaseClient) {}

  async create(account: Account): AsyncResult<string> {
    return this.client.clientPrisma.user
      .create({
        data: {
          profile: {
            connect: account.profile,
          },
          email: account.email,
          phone: account.phone,
          password: account.password,
          username: account.username,
        },
      })
      .then(result => Success(result.id))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async listAll(): AsyncResult<Account[]> {
    return this.client.clientPrisma.user
      .findMany()
      .then(result => Success(result as Account[]))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async findById(id: string): AsyncResult<Account> {
    return this.client.clientPrisma.user
      .findUnique({ where: { id } })
      .then(result => Success(result as Account))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async findByEmail(email: string): AsyncResult<Account> {
    return this.client.clientPrisma.user
      .findUnique({ where: { email } })
      .then(result => Success(result as Account))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async update(account: Account): AsyncResult<boolean> {
    return this.client.clientPrisma.user
      .update({
        where: { id: account.id },
        data: {
          profile: {
            connect: account.profile,
          },
          isActive: account.isActive,
          isResetPassword: account.isResetPassword,
        },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async delete(id: string): AsyncResult<boolean> {
    return this.client.clientPrisma.user
      .delete({ where: { id } })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
}

const singletonAccountRepository = new AccountReposityInstance(
  databaseClientSingleton,
);

export { singletonAccountRepository };
