import { DatabaseError } from "../../../../core/error/database_error";
import { prisma } from "../../../../core/prisma/connector";
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
    operator,
  }: BookletPayment): AsyncResult<string> {
    return prisma.bookletPayment
      .create({
        data: {
          bookletId,
          typePayment,
          status,
          isPaid,
          payDay: isPaid ? `${payDay}Z` : null,
          obs,
          operator,
        },
        include: {
          Booklet: true,
        },
      })
      .then(result => Success(result.id))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async findById(id: string): AsyncResult<BookletPayment> {
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
