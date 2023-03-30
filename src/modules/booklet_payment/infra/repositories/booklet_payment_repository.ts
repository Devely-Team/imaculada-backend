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
import { BookletPayment } from "../../domain/model/booklet_payment";

interface BookletPaymentReposity {
  addPayment(input: BookletPayment): AsyncResult<string>;
  findById(id: string): AsyncResult<BookletPayment>;
  setNewStatusPayment(input: BookletPayment): AsyncResult<boolean>;
}

class BookletPaymentReposityInstance implements BookletPaymentReposity {
  constructor(private client: DatabaseClient) {}

  async addPayment({
    bookletId,
    typePayment,
    status,
    isPaid,
    payDay,
  }: BookletPayment): AsyncResult<string> {
    return this.client.clientPrisma.bookletPayment
      .create({
        data: {
          bookletId,
          typePayment,
          status,
          isPaid,
          payDay,
        },
        include: {
          Booklet: true,
        },
      })
      .then(result => Success(result.id))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async findById(id: string): AsyncResult<BookletPayment> {
    return this.client.clientPrisma.bookletPayment
      .findUnique({
        where: {
          id,
        },
      })
      .then(result => Success(result as BookletPayment))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async setNewStatusPayment({
    id,
    status,
    typePayment,
    isPaid,
    payDay,
  }: BookletPayment): AsyncResult<boolean> {
    return this.client.clientPrisma.bookletPayment
      .update({
        where: {
          id,
        },
        data: {
          status,
          typePayment,
          isPaid,
          payDay,
        },
        include: {
          Booklet: true,
        },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
}

const singletonBookletPaymentReposity = new BookletPaymentReposityInstance(
  databaseClientSingleton,
);

export {
  BookletPaymentReposity,
  BookletPaymentReposityInstance,
  singletonBookletPaymentReposity,
};
