import { hasAccess } from "../../../../core/tools/has_access";
import { Input } from "../../../../core/tools/input_type";
import { Output } from "../../../../core/tools/output_type";
import { escaping } from "../../../../core/tools/result_escaping";
import { StatusCodes } from "../../../../core/utils/http_status_code";
import { onError } from "../../../../middleware/error/on_error";
import { UpdateCampaignCommand } from "../../domain/command/update_campaign_command";
import { UpdateCampaignDTO } from "../../domain/dto/update_campaign_dto";

class UpdateCampaignController {
  constructor(private command: UpdateCampaignCommand) {}

  async handler({ request, response, next }: Input<UpdateCampaignDTO>): Output {
    hasAccess(
      request,
      response,
      next,
      "update_campaign",
      this.command
        .execute(request.body, request.query.id as string)
        .then(result =>
          escaping(result, request, response, StatusCodes.Success),
        )
        .catch(error => onError(error, request, response)),
      "deletar a campanha",
    );
  }
}

export { UpdateCampaignController };
