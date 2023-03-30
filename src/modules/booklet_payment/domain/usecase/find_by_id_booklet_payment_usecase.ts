import { AsyncResult } from "../../../../core/tools/result_type";
import {
  BookletPaymentReposity,
  singletonBookletPaymentReposity,
} from "../../infra/repositories/booklet_payment_repository";
import { BookletPayment } from "../model/booklet_payment";

class FindByIdBookletPaymentUseCase {
  constructor(private repo: BookletPaymentReposity) {}

  async execute(input: string): AsyncResult<BookletPayment> {
    return await this.repo.findById(input);
  }
}

const singletonFindByIdBookletPaymentUseCase =
  new FindByIdBookletPaymentUseCase(singletonBookletPaymentReposity);

export {
  FindByIdBookletPaymentUseCase,
  singletonFindByIdBookletPaymentUseCase,
};
