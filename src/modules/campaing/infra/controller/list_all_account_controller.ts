import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { ListAllCampaignCommand } from "../../domain/command/list_all_campaign_command";

class ListAllCampaignController {
  constructor(
    private command: ListAllCampaignCommand = new ListAllCampaignCommand(),
  ) {}

  static get(): ListAllCampaignController {
    return new ListAllCampaignController();
  }

  async handler({ request, response }: InputBase): Output {
    this.command
      .execute(request.user as Account)
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { ListAllCampaignController };
