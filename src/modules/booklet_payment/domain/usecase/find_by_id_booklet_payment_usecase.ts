import { AsyncResult } from "../../../../core/tools/result_type";
import { BookletPaymentRepository } from "../../infra/repositories/booklet_payment_repository";
import { BookletPayment } from "../model/booklet_payment";

class FindByIdBookletPaymentUseCase {
  static async execute(input: string): AsyncResult<BookletPayment> {
    return await BookletPaymentRepository.findById(input);
  }
}

export { FindByIdBookletPaymentUseCase };
