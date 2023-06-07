import { PrismaClient } from "@prisma/client";

import { DatabaseError } from "../../../../core/error/database_error";
import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../core/tools/result_type";
import { Booklet } from "../../../booklet/domain/model/booklet";

const prisma = new PrismaClient();

export class AnalitycsRepository {
  static async getBookletPayd(quota: number): AsyncResult<Booklet[]> {
    return prisma.booklet
      .findMany({
        where: {
          bookletPayment: {
            isPaid: true,
          },
          quota,
        },
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

  static async getBookletNotPayd(quota: number): AsyncResult<Booklet[]> {
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
}
