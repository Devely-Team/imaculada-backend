import { BookletPaymentRepository } from "../../infra/repositories/booklet_payment_repository";

class DeleteBookletPaymentUseCase {
  static async execute(input: string) {
    return await BookletPaymentRepository.deletePayment(input);
  }
}

export { DeleteBookletPaymentUseCase };
