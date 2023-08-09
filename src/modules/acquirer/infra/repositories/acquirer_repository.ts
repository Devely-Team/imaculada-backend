import { DatabaseError } from "../../../../core/error/database_error";
import { prisma } from "../../../../core/prisma/connector";
import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../core/tools/result_type";
import { Acquirer } from "../../domain/model/acquirer";

export async function createAcquirer({
  name,
  cpf,
  landline,
  whatsapp,
  phone,
  address,
  cep,
  neighborhood,
}: Acquirer): AsyncResult<string> {
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

export async function listAllAcquirer(): AsyncResult<Acquirer[]> {
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

export async function listAllAcquirerWithPagination(
  page = 1,
): AsyncResult<Acquirer[]> {
  const pageSize = 10; // Tamanho da página (número de resultados por página)

  const skipAmount = (page - 1) * pageSize;

  return prisma.acquirer
    .findMany({
      skip: skipAmount,
      take: pageSize,
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
        id: "asc",
      },
    })
    .then(result => Success(result as Acquirer[]))
    .catch(error => Failure(new DatabaseError(error.name, error.message)));
}

export async function findByIdAcquirer(id: string): AsyncResult<Acquirer> {
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

export async function findByCPFAcquirer(cpf: string): AsyncResult<Acquirer> {
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

export async function findByNameAcquirer(
  name: string,
): AsyncResult<Acquirer[]> {
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

export async function updateAcquirer({
  name,
  landline,
  whatsapp,
  phone,
  address,
  cep,
  neighborhood,
  id,
}: Acquirer): AsyncResult<boolean> {
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

export async function deleteAcquirer(id: string): AsyncResult<boolean> {
  return prisma.acquirer
    .delete({ where: { id } })
    .then(() => Success(true))
    .catch(error => Failure(new DatabaseError(error.name, error.message)));
}
