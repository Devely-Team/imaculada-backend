import { BookletReposity } from "../../infra/repositories/booklet_repository";
import { singletonBookletRepository } from "../../infra/repositories/booklet_repository.instance";

class UpdateBookletUseCase {
  constructor(private repo: BookletReposity) {}

  async execute(paymentId: string, id: string) {
    return await this.repo.setPayment(paymentId, id);
  }
}

const singletonUpdateBookletUseCase = new UpdateBookletUseCase(
  singletonBookletRepository,
);

export { UpdateBookletUseCase, singletonUpdateBookletUseCase };
