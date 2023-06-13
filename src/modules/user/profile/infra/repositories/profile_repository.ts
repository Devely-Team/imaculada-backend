import { DatabaseError } from "../../../../../core/error/database_error";
import { prisma } from "../../../../../core/prisma/connector";
import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../../core/tools/result_type";
import { Profile } from "../../domain/model/profile";

export class ProfileRepository {
  static async create(profile: Profile): AsyncResult<string> {
    return prisma.profile
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

  static async listAll(): AsyncResult<Profile[]> {
    return prisma.profile
      .findMany()
      .then(result => Success(result as Profile[]))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async findById(id: string): AsyncResult<Profile> {
    return prisma.profile
      .findUnique({ where: { id } })
      .then(result => Success(result as Profile))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async findByUserLogged(userId: string): AsyncResult<Profile[]> {
    return prisma.profile
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

  static async update(profile: Profile): AsyncResult<boolean> {
    return prisma.profile
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

  static async delete(id: string): AsyncResult<boolean> {
    return prisma.profile
      .delete({ where: { id } })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
}
