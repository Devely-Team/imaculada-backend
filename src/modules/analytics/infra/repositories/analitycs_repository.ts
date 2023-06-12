import { PrismaClient } from "@prisma/client";

import { DatabaseError } from "../../../../core/error/database_error";
import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../core/tools/result_type";
import { Booklet } from "../../../booklet/domain/model/booklet";

export class AnalitycsRepository {
  static async getBookletPayd(quota: number): AsyncResult<Booklet[]> {
    const prisma = new PrismaClient();
    return prisma.booklet
      .findMany({
        where: {
          bookletPayment: {
            isPaid: true,
          },
          quota,
        },
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

  static async getBookletNotPayd(quota: number): AsyncResult<Booklet[]> {
    const prisma = new PrismaClient();
    return prisma.booklet
      .findMany({
        where: {
          quota,
          OR: [
            {
              paymentBookId: null,
            },
            {
              bookletPayment: {
                isPaid: false,
              },
            },
          ],
        },
        include: { acquirer: true },
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

  static async countedBookletHasPayment(quota?: number): AsyncResult<number> {
    const prisma = new PrismaClient();
    return prisma.booklet
      .count({
        where: {
          bookletPayment: {
            isPaid: true,
          },
          quota,
        },
      })
      .then(result => Success(result))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async countedBookletTotal(quota?: number): AsyncResult<number> {
    const prisma = new PrismaClient();
    return prisma.booklet
      .count({
        where: {
          quota,
        },
      })
      .then(result => Success(result))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  static async countedBookletNotHasPayment(
    quota?: number,
  ): AsyncResult<number> {
    const prisma = new PrismaClient();
    return prisma.booklet
      .count({
        where: {
          quota,
          OR: [
            {
              paymentBookId: null,
            },
            {
              bookletPayment: {
                isPaid: false,
              },
            },
          ],
        },
      })
      .then(result => Success(result))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
}
