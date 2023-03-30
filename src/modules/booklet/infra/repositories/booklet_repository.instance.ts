import { DatabaseError } from "../../../../core/error/database_error";
import {
  DatabaseClient,
  databaseClientSingleton,
} from "../../../../core/prisma/prisma_client";
import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../core/tools/result_type";
import { Booklet } from "../../domain/model/booklet";
import { BookletReposity } from "./booklet_repository";

class BookletReposityInstance implements BookletReposity {
  constructor(private client: DatabaseClient) {}

  async create(booklet: Booklet): AsyncResult<string> {
    return this.client.clientPrisma.booklet
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

  async listAll(): AsyncResult<Booklet[]> {
    return this.client.clientPrisma.booklet
      .findMany({
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

  async findById(id: string): AsyncResult<Booklet> {
    return this.client.clientPrisma.booklet
      .findUnique({
        where: { id },
        include: { bookletPayment: true },
      })
      .then(result => Success(result as Booklet))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async findByCode(code: number): AsyncResult<Booklet[]> {
    return this.client.clientPrisma.booklet
      .findMany({
        where: { codeBooklet: code },
        include: { bookletPayment: true },
        orderBy: {
          quota: "asc",
        },
      })
      .then(result => Success(result as Booklet[]))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async findByAcquirer(acquirerId: string): AsyncResult<Booklet[]> {
    return this.client.clientPrisma.booklet
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

  async update(booklet: Booklet): AsyncResult<Booklet> {
    console.log("booklet: ", booklet);
    return Failure(new DatabaseError("error.name", "error.message"));
  }

  async setPayment(paymentId: string, id: string): AsyncResult<boolean> {
    return this.client.clientPrisma.booklet
      .update({
        where: { id },
        data: {
          paymentBookId: paymentId,
        },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async delete(id: string): AsyncResult<boolean> {
    return this.client.clientPrisma.booklet
      .delete({ where: { id } })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
  async deleteByCode(code: number): AsyncResult<boolean> {
    return this.client.clientPrisma.booklet
      .deleteMany({ where: { codeBooklet: code } })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
}

const singletonBookletRepository = new BookletReposityInstance(
  databaseClientSingleton,
);

export { singletonBookletRepository };
