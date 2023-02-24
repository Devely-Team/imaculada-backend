import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { ListAllCampaignCommand } from "../../domain/command/list_all_campaign_command";

class ListAllCampaignController {
  constructor(private command: ListAllCampaignCommand) {}

  async handler({ request, response }: InputBase): Output {
    this.command
      .execute()
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { ListAllCampaignController };