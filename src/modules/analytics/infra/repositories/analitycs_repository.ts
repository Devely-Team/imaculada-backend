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
  static async getBookletPayd(): AsyncResult<Booklet[]> {
    return prisma.booklet
      .findMany({
        where: {
          bookletPayment: {
            isPaid: true,
          },
          // quota: 1,
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

  static async getBookletNotPayd(): AsyncResult<Booklet[]> {
    return prisma.booklet
      .findMany({
        where: {
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
