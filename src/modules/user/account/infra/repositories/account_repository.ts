import { PrismaClient } from "@prisma/client";

import { DatabaseError } from "../../../../../core/error/database_error";
import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../../core/tools/result_type";
import { Profile } from "../../../profile/domain/model/profile";
import { Account } from "../../domain/model/account";

export class AccountRepository {
  static async create(account: Account): AsyncResult<string> {
    const prisma = new PrismaClient();
    return prisma.user
      .create({
        data: {
          email: account.email,
          phone: account.phone,
          password: account.password,
          username: account.username,
        },
      })
      .then(result => Success(result.id))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async listAll(): AsyncResult<Account[]> {
    const prisma = new PrismaClient();
    return prisma.user
      .findMany({
        include: {
          profile: true,
        },
      })
      .then(result => Success(result as Account[]))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async findById(id: string): AsyncResult<Account> {
    const prisma = new PrismaClient();
    return prisma.user
      .findUnique({
        where: { id },
        include: {
          profile: true,
        },
      })
      .then(result => Success(result as Account))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async findByEmail(email: string): AsyncResult<Account> {
    const prisma = new PrismaClient();
    return prisma.user
      .findUnique({
        where: { email },
        include: {
          profile: true,
        },
      })
      .then(result => Success(result as Account))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async update(account: Account): AsyncResult<boolean> {
    const prisma = new PrismaClient();
    return prisma.user
      .update({
        where: { id: account.id },
        data: {
          phone: account.phone,
          email: account.email,
        },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async updateActive(
    id: string,
    isActive: boolean,
  ): AsyncResult<boolean> {
    const prisma = new PrismaClient();
    return prisma.user
      .update({
        where: { id },
        data: {
          isActive,
        },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async updateProfile(
    id: string,
    profiles: Profile[],
  ): AsyncResult<boolean> {
    const prisma = new PrismaClient();
    return prisma.user
      .update({
        where: { id },
        data: {
          profile: {
            set: profiles,
          },
        },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async updatePassword(
    id: string,
    password: string,
  ): AsyncResult<boolean> {
    const prisma = new PrismaClient();
    return prisma.user
      .update({
        where: { id },
        data: {
          password,
          isResetPassword: false,
        },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async updateResetPassword(
    id: string,
    isResetPassword: boolean,
  ): AsyncResult<boolean> {
    const prisma = new PrismaClient();
    return prisma.user
      .update({
        where: { id },
        data: {
          isResetPassword,
        },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async delete(id: string): AsyncResult<boolean> {
    const prisma = new PrismaClient();
    return prisma.user
      .delete({ where: { id } })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
}
