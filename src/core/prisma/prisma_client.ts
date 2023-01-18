import { PrismaClient } from "@prisma/client";

class DatabaseClient {
  constructor(private prisma: PrismaClient = new PrismaClient()) {}

  get clientPrisma() {
    return this.prisma;
  }
}

const databaseClientSingleton = new DatabaseClient();

export { databaseClientSingleton, DatabaseClient };
