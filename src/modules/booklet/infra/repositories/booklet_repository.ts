import { DatabaseError } from "../../../../core/error/database_error";
import { prisma } from "../../../../core/prisma/connector";
import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../core/tools/result_type";
import { Booklet } from "../../domain/model/booklet";

export class BookletRepository {
  static async create(booklet: Booklet): AsyncResult<string> {
    return prisma.booklet
      .create({
        data: {
          campaignId: booklet.campaignId,
          acquirerId: booklet.acquirerId,
          codeBooklet: booklet.codeBooklet,
          quota: booklet.quota,
        },
      })

      .then(result => Success(result.id))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async listAll(): AsyncResult<Booklet[]> {
    return prisma.booklet
      .findMany({
        include: { bookletPayment: true, acquirer: true },
        orderBy: [
          {
            codeBooklet: "asc",
          },
          {
            quota: "asc",
          },
        ],
      })
      .then(result => Success(result as Booklet[]))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async findById(id: string): AsyncResult<Booklet> {
    return prisma.booklet
      .findUnique({
        where: { id },
        include: { bookletPayment: true },
      })
      .then(result => Success(result as Booklet))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async findByCode(code: number): AsyncResult<Booklet[]> {
    return prisma.booklet
      .findMany({
        where: { codeBooklet: code },
        include: { bookletPayment: true, acquirer: true },
        orderBy: {
          quota: "asc",
        },
      })
      .then(result => Success(result != null ? (result as Booklet[]) : []))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async findByAcquirer(acquirerId: string): AsyncResult<Booklet[]> {
    return prisma.booklet
      .findMany({
        where: { acquirerId },
        include: { bookletPayment: true },
        orderBy: [
          {
            codeBooklet: "asc",
          },
          {
            quota: "asc",
          },
        ],
      })
      .then(result => Success(result as Booklet[]))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async update(booklet: Booklet): AsyncResult<Booklet> {
    console.log("booklet: ", booklet);
    return Failure(new DatabaseError("error.name", "error.message"));
  }

  static async setPayment(paymentId: string, id: string): AsyncResult<boolean> {
    return prisma.booklet
      .update({
        where: { id },
        data: {
          paymentBookId: paymentId,
        },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async delete(id: string): AsyncResult<boolean> {
    return prisma.booklet
      .delete({ where: { id } })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
  static async deleteByCode(code: number): AsyncResult<boolean> {
    return prisma.booklet
      .deleteMany({ where: { codeBooklet: code } })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
}
