import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { DeleteCampaignUseCase } from "../usecase/delete_campaign_usecase";

class DeleteCampaignCommand {
  constructor(
    private usecase: DeleteCampaignUseCase = new DeleteCampaignUseCase(),
  ) {}

  async execute(input: string, user: Account) {
    const accessDenied = hasAccess(
      user,
      "delete_campaign",
      "deletar novas campanhas.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await this.usecase.execute(input);
  }
}

export { DeleteCampaignCommand };
