import {
  BookletPaymentReposity,
  singletonBookletPaymentReposity,
} from "../../infra/repositories/booklet_payment_repository";

class DeleteBookletPaymentUseCase {
  constructor(
    private repo: BookletPaymentReposity = singletonBookletPaymentReposity,
  ) {}

  async execute(input: string) {
    return await this.repo.deletePayment(input);
  }
}

const singletonDeleteBookletPaymentUseCase = new DeleteBookletPaymentUseCase(
  singletonBookletPaymentReposity,
);

export { DeleteBookletPaymentUseCase, singletonDeleteBookletPaymentUseCase };
