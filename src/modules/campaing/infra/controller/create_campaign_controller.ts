import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { Account } from "../../../user/account/domain/model/account";
import { CreateCampaignCommand } from "../../domain/command/create_campaign_command";
import { CreateCampaignDTO } from "../../domain/dto/create_campaign_dto";

class CreateCampaignController {
  constructor(
    private command: CreateCampaignCommand = new CreateCampaignCommand(),
  ) {}

  static get(): CreateCampaignController {
    return new CreateCampaignController();
  }

  async handler({ request, response }: Input<CreateCampaignDTO>): Output {
    this.command
      .execute(request.body, request.user as Account)
      .then(result => escaping(result, request, response, StatusCodes.Created))
      .catch(error => onError(error, request, response));
  }
}

export { CreateCampaignController };
