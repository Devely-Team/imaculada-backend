import { Success } from "../../../../core/tools/result_type";
import { AnalitycsRepository } from "../../infra/repositories/analitycs_repository";

export class ListAnalitycsUseCase {
  static async execute(quota?: number) {
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
}
