import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { FindbyIdCampaignCommand } from "../../domain/command/find_by_id_campaign_command";

class FindByIdCampaignController {
  constructor(private command: FindbyIdCampaignCommand) {}

  async handler({ request, response }: InputBase): Output {
    this.command
      .execute(request.query.id as string)
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { FindByIdCampaignController };
