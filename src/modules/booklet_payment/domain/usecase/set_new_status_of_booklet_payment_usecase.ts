import { AsyncResult } from "../../../../core/tools/result_type";
import { Account } from "../../../user/account/domain/model/account";
import { BookletPaymentRepository } from "../../infra/repositories/booklet_payment_repository";
import { SetNewStatusBookletPaymentDTO } from "../dto/booklet_payment_dto";
import { BookletPayment } from "../model/booklet_payment";

class SetNewStatusOfBookletPaymentUseCase {
  static async execute(
    input: SetNewStatusBookletPaymentDTO,
    id: string,
    user: Account,
  ): AsyncResult<boolean> {
    const payment = new BookletPayment({
      id,
      ...input,
      bookletId: "",
      obs: `${input.obs} - operador: ${user.email}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return await BookletPaymentRepository.setNewStatusPayment(payment);
  }
}

export { SetNewStatusOfBookletPaymentUseCase };
