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
import { Role } from "../../domain/model/role";
import { RoleRepository } from "./role_repository";

class RoleRepositoryInstance implements RoleRepository {
  constructor(private client: DatabaseClient) {}

  async create(role: Role): AsyncResult<string> {
    return this.client.clientPrisma.role
      .create({
        data: {
          role: role.role,
          description: role.description,
        },
      })
      .then(result => Success(result.id))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async listAll(): AsyncResult<Role[]> {
    return this.client.clientPrisma.role
      .findMany()
      .then(result => Success(result as Role[]))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async findById(id: string): AsyncResult<Role> {
    return this.client.clientPrisma.role
      .findUnique({ where: { id } })
      .then(result => Success(result as Role))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async update(role: Role): AsyncResult<boolean> {
    return this.client.clientPrisma.role
      .update({
        where: { id: role.id },
        data: { role: role.role, description: role.description },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async delete(id: string): AsyncResult<boolean> {
    return this.client.clientPrisma.role
      .delete({ where: { id } })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
}

const singletonRoleRepository = new RoleRepositoryInstance(
  databaseClientSingleton,
);

export { singletonRoleRepository };
