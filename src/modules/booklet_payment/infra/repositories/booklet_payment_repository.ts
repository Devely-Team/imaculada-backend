import { PrismaClient } from "@prisma/client";

import { DatabaseError } from "../../../../core/error/database_error";
import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../core/tools/result_type";
import { BookletPayment } from "../../domain/model/booklet_payment";

export class BookletPaymentRepository {
  static async addPayment({
    bookletId,
    typePayment,
    status,
    isPaid,
    payDay,
    obs,
  }: BookletPayment): AsyncResult<string> {
    const prisma = new PrismaClient();
    return prisma.bookletPayment
      .create({
        data: {
          bookletId,
          typePayment,
          status,
          isPaid,
          payDay: isPaid ? `${payDay}Z` : null,
          obs,
        },
        include: {
          Booklet: true,
        },
      })
      .then(result => Success(result.id))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async findById(id: string): AsyncResult<BookletPayment> {
    const prisma = new PrismaClient();
    return prisma.bookletPayment
      .findUnique({
        where: {
          id,
        },
      })
      .then(result => Success(result as BookletPayment))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async setNewStatusPayment({
    id,
    status,
    typePayment,
    isPaid,
    payDay,
    obs,
  }: BookletPayment): AsyncResult<boolean> {
    const prisma = new PrismaClient();
    return prisma.bookletPayment
      .update({
        where: {
          id,
        },
        data: {
          status,
          typePayment,
          isPaid,
          payDay: isPaid ? `${payDay}Z` : null,
          obs,
        },
        include: {
          Booklet: true,
        },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async deletePayment(id: string): AsyncResult<boolean> {
    const prisma = new PrismaClient();
    return prisma.bookletPayment
      .delete({
        where: {
          id,
        },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
}
