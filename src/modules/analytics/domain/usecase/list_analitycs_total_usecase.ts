import { BadRequestError } from "../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../core/error/base_error";
import { Failure, Success } from "../../../../core/tools/result_type";
import { campaignPaymentDate } from "../../../booklet/infra/data/campaign_payment_date";
import { AnalitycsRepository } from "../../infra/repositories/analitycs_repository";

export class ListAnalitycsTotalUseCase {
  static async execute() {
    const result = campaignPaymentDate.map(async data => {
      const countedPayd = await AnalitycsRepository.countedBookletHasPayment(
        data.quota,
      );

      const countedNotPayd =
        await AnalitycsRepository.countedBookletNotHasPayment(data.quota);

      const countedTotal = await AnalitycsRepository.countedBookletTotal(
        data.quota,
      );

      return {
        countedPayd: countedPayd.ok ? countedPayd.value : 0,
        countedNotPayd: countedNotPayd.ok ? countedNotPayd.value : 0,
        countedTotal: countedTotal.ok ? countedTotal.value : 0,
        quota: data.quota,
      };
    });

    return Promise.all(result)
      .then(result => Success(result))
      .catch(err =>
        Failure(
          new BadRequestError(
            BaseErrorCodes.objectValidation,
            err,
            err.message,
          ),
        ),
      );
  }
}
