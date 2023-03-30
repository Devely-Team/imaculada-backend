import { AsyncResult } from "../../../../core/tools/result_type";
import {
  BookletPaymentReposity,
  singletonBookletPaymentReposity,
} from "../../infra/repositories/booklet_payment_repository";
import { SetNewStatusBookletPaymentDTO } from "../dto/booklet_payment_dto";
import { BookletPayment } from "../model/booklet_payment";

class SetNewStatusOfBookletPaymentUseCase {
  constructor(private repo: BookletPaymentReposity) {}

  async execute(
    input: SetNewStatusBookletPaymentDTO,
    id: string,
  ): AsyncResult<boolean> {
    const payment = new BookletPayment({
      id,
      ...input,
      bookletId: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return await this.repo.setNewStatusPayment(payment);
  }
}

const singletonSetNewStatusOfBookletPaymentUseCase =
  new SetNewStatusOfBookletPaymentUseCase(singletonBookletPaymentReposity);

export {
  SetNewStatusOfBookletPaymentUseCase,
  singletonSetNewStatusOfBookletPaymentUseCase,
};
