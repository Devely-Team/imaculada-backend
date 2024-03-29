import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { UpdateCampaignCommand } from "../../domain/command/update_campaign_command";
import { UpdateCampaignDTO } from "../../domain/dto/update_campaign_dto";

class UpdateCampaignController {
  constructor(
    private command: UpdateCampaignCommand = new UpdateCampaignCommand(),
  ) {}

  static get(): UpdateCampaignController {
    return new UpdateCampaignController();
  }

  async handler({ request, response }: Input<UpdateCampaignDTO>): Output {
    this.command
      .execute(
        request.body,
        request.query.id as string,
        request.user as Account,
      )
      .then(result => escaping(result, request, response, StatusCodes.Success))
      .catch(error => onError(error, request, response));
  }
}

export { UpdateCampaignController };
