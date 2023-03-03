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
import { Profile } from "../../domain/model/profile";
import { ProfileRepository } from "./profile_repository";

class ProfileRepositoryInstance implements ProfileRepository {
  constructor(private client: DatabaseClient) {}

  async create(profile: Profile): AsyncResult<string> {
    return this.client.clientPrisma.profile
      .create({
        data: {
          profile: profile.profile,
          description: profile.description,
          route: profile.route,
        },
      })
      .then(result => Success(result.id))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async listAll(): AsyncResult<Profile[]> {
    return this.client.clientPrisma.profile
      .findMany()
      .then(result => Success(result as Profile[]))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async findById(id: string): AsyncResult<Profile> {
    return this.client.clientPrisma.profile
      .findUnique({ where: { id } })
      .then(result => Success(result as Profile))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async findByUserLogged(userId: string): AsyncResult<Profile[]> {
    return this.client.clientPrisma.profile
      .findMany({
        where: {
          User: {
            every: { id: userId },
          },
        },
      })
      .then(result => Success(result as Profile[]))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async update(profile: Profile): AsyncResult<boolean> {
    return this.client.clientPrisma.profile
      .update({
        where: { id: profile.id },
        data: {
          profile: profile.profile,
          description: profile.description,
          route: profile.route,
        },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async delete(id: string): AsyncResult<boolean> {
    return this.client.clientPrisma.profile
      .delete({ where: { id } })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
}

const singletonProfileRepository = new ProfileRepositoryInstance(
  databaseClientSingleton,
);

export { singletonProfileRepository };
