import { Account } from "../../../user/account/domain/model/account";
import { BookletPaymentRepository } from "../../infra/repositories/booklet_payment_repository";
import { CreateBookletPaymentDTO } from "../dto/booklet_payment_dto";
import { BookletPayment } from "../model/booklet_payment";

class CreateBookletPaymentUseCase {
  static async execute(input: CreateBookletPaymentDTO, user: Account) {
    const payment = new BookletPayment({
      ...input,
      id: "",
      obs: `${input.obs} - operador: ${user.email}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return await BookletPaymentRepository.addPayment(payment);
  }
}

export { CreateBookletPaymentUseCase };
