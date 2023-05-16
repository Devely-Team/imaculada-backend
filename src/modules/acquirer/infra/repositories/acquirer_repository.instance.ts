import { DatabaseError } from "../../../../core/error/database_error";
import { DatabaseClient } from "../../../../core/prisma/prisma_client";
import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../core/tools/result_type";
import { Acquirer } from "../../domain/model/acquirer";
import { AcquirerReposity } from "./acquirer_repository";

class AcquirerReposityInstance implements AcquirerReposity {
  constructor(private client: DatabaseClient) {}

  async create({
    name,
    cpf,
    landline,
    whatsapp,
    phone,
    address,
    cep,
    neighborhood,
  }: Acquirer): AsyncResult<string> {
    return this.client.clientPrisma.acquirer
      .create({
        data: {
          cpf,
          landline,
          whatsapp,
          name,
          phone,
          address,
          cep,
          neighborhood,
        },
      })
      .then(result => Success(result.id))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async listAll(): AsyncResult<Acquirer[]> {
    return this.client.clientPrisma.acquirer
      .findMany({
        include: {
          booklet: {
            orderBy: [
              {
                codeBooklet: "asc",
              },
              {
                quota: "asc",
              },
            ],
          },
        },
        orderBy: {
          name: "asc",
        },
      })
      .then(result => Success(result as Acquirer[]))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async findById(id: string): AsyncResult<Acquirer> {
    return this.client.clientPrisma.acquirer
      .findUnique({
        where: { id },
        include: {
          booklet: {
            orderBy: [
              {
                codeBooklet: "asc",
              },
              {
                quota: "asc",
              },
            ],
          },
        },
      })
      .then(result => Success(result as Acquirer))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  findByCPF(cpf: string): AsyncResult<Acquirer> {
    return this.client.clientPrisma.acquirer
      .findUnique({
        where: { cpf },
        include: {
          booklet: {
            orderBy: [
              {
                codeBooklet: "asc",
              },
              {
                quota: "asc",
              },
            ],
          },
        },
      })
      .then(result => Success(result as Acquirer))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  findByName(name: string): AsyncResult<Acquirer[]> {
    return this.client.clientPrisma.acquirer
      .findMany({
        where: {
          name: {
            contains: name,
          },
        },
        orderBy: {
          name: "asc",
        },
        include: {
          booklet: {
            orderBy: [
              {
                codeBooklet: "asc",
              },
              {
                quota: "asc",
              },
            ],
          },
        },
      })
      .then(result => Success(result as Acquirer[]))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  update({
    name,
    landline,
    whatsapp,
    phone,
    address,
    cep,
    neighborhood,
    id,
  }: Acquirer): AsyncResult<boolean> {
    return this.client.clientPrisma.acquirer
      .update({
        where: { id },
        data: {
          name,
          landline,
          whatsapp,
          phone,
          address,
          cep,
          neighborhood,
        },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async delete(id: string): AsyncResult<boolean> {
    return this.client.clientPrisma.acquirer
      .delete({ where: { id } })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
}

export { AcquirerReposityInstance };
