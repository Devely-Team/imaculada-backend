import { DatabaseError } from "../../../../core/error/database_error";
import { prisma } from "../../../../core/prisma/connector";
import {
  AsyncResult,
  Failure,
  Success,
} from "../../../../core/tools/result_type";
import { Campaign } from "../../domain/model/campaign";

export async function createCampaign(campaign: Campaign): AsyncResult<string> {
  const startedDate = new Date(campaign.startedDate);

  return prisma.campaign
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

export async function listAllCampaign(): AsyncResult<Campaign[]> {
  return prisma.campaign
    .findMany({})
    .then(result => Success(result as Campaign[]))
    .catch(error => Failure(new DatabaseError(error.name, error.message)));
}

export async function findByIdCampaign(id: string): AsyncResult<Campaign> {
  return prisma.campaign
    .findUnique({
      where: { id },
    })
    .then(result => Success(result as Campaign))
    .catch(error => Failure(new DatabaseError(error.name, error.message)));
}

export async function findByTitleCampaign(
  title: string,
): AsyncResult<Campaign> {
  return prisma.campaign
    .findUnique({
      where: { title },
    })
    .then(result => Success(result as Campaign))
    .catch(error => Failure(new DatabaseError(error.name, error.message)));
}

export async function updateCampaign(campaign: Campaign): AsyncResult<boolean> {
  return prisma.campaign
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

export async function deleteCampaign(id: string): AsyncResult<boolean> {
  return prisma.campaign
    .delete({ where: { id } })
    .then(() => Success(true))
    .catch(error => Failure(new DatabaseError(error.name, error.message)));
}
