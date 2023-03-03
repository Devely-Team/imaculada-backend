import { InputBase } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { DeleteCampaignCommand } from "../../domain/command/delete_campaign_command";

class DeleteCampaignController {
  constructor(private command: DeleteCampaignCommand) {}

  async handler({ request, response }: InputBase): Output {
    this.command
      .execute(request.query.id as string, request.user as Account)
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { DeleteCampaignController };
