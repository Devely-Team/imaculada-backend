import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { UpdateCampaignDTO } from "../dto/update_campaign_dto";
import { updateCampaignUseCase } from "../usecase/update_account_usecase";

export async function updateCampaignCommand(
  input: UpdateCampaignDTO,
  id: string,
  user: Account,
) {
  const accessDenied = hasAccess(
    user,
    "update_campaign",
    "atualiza a campanha.",
  );

  if (accessDenied.ok === false) {
    return accessDenied;
  }

  return await updateCampaignUseCase({
    id,
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: input.isActive,
    title: input.title,
    description: input.description,
    quota: input.quota,
    startedDate: input.startedDate,
  });
}
