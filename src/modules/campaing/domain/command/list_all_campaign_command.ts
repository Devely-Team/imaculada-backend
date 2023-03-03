import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { ListCampaignUseCase } from "../usecase/list_campaign_usecase";

class ListAllCampaignCommand {
  constructor(private usecase: ListCampaignUseCase) {}

  async execute(user: Account) {
    const accessDenied = hasAccess(
      user,
      "list_campaign",
      "listar todas as campanha.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await this.usecase.execute();
  }
}

export { ListAllCampaignCommand };
