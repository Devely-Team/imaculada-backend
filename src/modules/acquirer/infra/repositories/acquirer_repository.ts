import { PrismaClient } from "@prisma/client";

import { DatabaseError } from "../../../../core/error/database_error";
import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../core/tools/result_type";
import { Acquirer } from "../../domain/model/acquirer";

export class AcquirerReposity {
  static async create({
    name,
    cpf,
    landline,
    whatsapp,
    phone,
    address,
    cep,
    neighborhood,
  }: Acquirer): AsyncResult<string> {
    const prisma = new PrismaClient();
    return prisma.acquirer
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

  static async listAll(): AsyncResult<Acquirer[]> {
    const prisma = new PrismaClient();
    return prisma.acquirer
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

  static async findById(id: string): AsyncResult<Acquirer> {
    const prisma = new PrismaClient();
    return prisma.acquirer
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

  static async findByCPF(cpf: string): AsyncResult<Acquirer> {
    const prisma = new PrismaClient();
    return prisma.acquirer
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

  static async findByName(name: string): AsyncResult<Acquirer[]> {
    const prisma = new PrismaClient();
    return prisma.acquirer
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

  static async update({
    name,
    landline,
    whatsapp,
    phone,
    address,
    cep,
    neighborhood,
    id,
  }: Acquirer): AsyncResult<boolean> {
    const prisma = new PrismaClient();
    return prisma.acquirer
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

  static async delete(id: string): AsyncResult<boolean> {
    const prisma = new PrismaClient();
    return prisma.acquirer
      .delete({ where: { id } })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
}
