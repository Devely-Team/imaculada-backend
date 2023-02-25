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
import { Campaign } from "../../domain/model/campaign";
import { CampaignReposity } from "./campaign_repository";

class CampaignReposityInstance implements CampaignReposity {
  constructor(private client: DatabaseClient) {}

  async create(campaign: Campaign): AsyncResult<string> {
    const startedDate = new Date(campaign.startedDate);

    return this.client.clientPrisma.campaign
      .create({
        data: {
          title: campaign.title,
          description: campaign.description,
          quota: campaign.quota,
          startedDate,
        },
      })
      .then(result => Success(result.id))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async listAll(): AsyncResult<Campaign[]> {
    return this.client.clientPrisma.campaign
      .findMany({})
      .then(result => Success(result as Campaign[]))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async findById(id: string): AsyncResult<Campaign> {
    return this.client.clientPrisma.campaign
      .findUnique({
        where: { id },
      })
      .then(result => Success(result as Campaign))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async findByTitle(title: string): AsyncResult<Campaign> {
    return this.client.clientPrisma.campaign
      .findUnique({
        where: { title },
      })
      .then(result => Success(result as Campaign))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  update(campaign: Campaign): AsyncResult<boolean> {
    return this.client.clientPrisma.campaign
      .update({
        where: { id: campaign.id },
        data: {
          description: campaign.description,
          quota: campaign.quota,
          isActive: campaign.isActive,
          startedDate: campaign.startedDate,
        },
      })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }

  async delete(id: string): AsyncResult<boolean> {
    return this.client.clientPrisma.campaign
      .delete({ where: { id } })
      .then(() => Success(true))
      .catch(error => Failure(new DatabaseError(error.name, error.message)));
  }
}

const singletonCampaignRepository = new CampaignReposityInstance(
  databaseClientSingleton,
);

export { singletonCampaignRepository };
