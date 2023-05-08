import { PrismaClient } from "@prisma/client";

class DatabaseClient {
  constructor(private prisma: PrismaClient = new PrismaClient()) {
    this.prisma
      .$connect()
      .then(() => {
        console.log("DatabaseClient: get clientPrisma: connected");
      })
      .catch(error => {
        console.log("DatabaseClient: get clientPrisma: error: ", error);
      });
  }

  get clientPrisma() {
    return this.prisma;
  }
}

const databaseClientSingleton = new DatabaseClient();

export { databaseClientSingleton, DatabaseClient };
