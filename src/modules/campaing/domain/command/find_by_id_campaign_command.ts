import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { FindByIdCampaignUseCase } from "../usecase/find_by_id_campaign_usecase";

class FindbyIdCampaignCommand {
  constructor(private usecase: FindByIdCampaignUseCase) {}

  async execute(input: string, user: Account) {
    const accessDenied = hasAccess(
      user,
      "list_campaign",
      "procurar campanha pela identificação da campanha.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await this.usecase.execute(input);
  }
}

export { FindbyIdCampaignCommand };
