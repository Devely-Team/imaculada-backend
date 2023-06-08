import { Success } from "../../../../core/tools/result_type";
import { campaignPaymentDate } from "../../../booklet/infra/data/campaign_payment_date";
import { AnalitycsRepository } from "../../infra/repositories/analitycs_repository";

export class ListAnalitycsUseCase {
  static async execute(quota?: number) {
    if (quota) {
      const countedPayd = await AnalitycsRepository.countedBookletHasPayment(
        quota,
      );

      const countedNotPayd =
        await AnalitycsRepository.countedBookletNotHasPayment(quota);

      const countedTotal = await AnalitycsRepository.countedBookletTotal(quota);

      return Success({
        countedPayd: countedPayd.ok ? countedPayd.value : 0,
        countedNotPayd: countedNotPayd.ok ? countedNotPayd.value : 0,
        countedTotal: countedTotal.ok ? countedTotal.value : 0,
        quota,
      });
    }

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
      .catch(() => {
        return Success([]);
      });
  }
}
