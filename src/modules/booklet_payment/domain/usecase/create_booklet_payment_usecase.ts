import { BookletPaymentRepository } from "../../infra/repositories/booklet_payment_repository";
import { CreateBookletPaymentDTO } from "../dto/booklet_payment_dto";
import { BookletPayment } from "../model/booklet_payment";

class CreateBookletPaymentUseCase {
  static async execute(input: CreateBookletPaymentDTO) {
    const payment = new BookletPayment({
      ...input,
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return await BookletPaymentRepository.addPayment(payment);
  }
}

export { CreateBookletPaymentUseCase };
