import { BookletRepository } from "../../infra/repositories/booklet_repository";

export class UpdateBookletUseCase {
  static async execute(paymentId: string, id: string) {
    return await BookletRepository.setPayment(paymentId, id);
  }
}
