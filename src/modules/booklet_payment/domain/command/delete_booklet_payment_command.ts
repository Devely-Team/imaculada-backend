import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { DeleteBookletPaymentUseCase } from "../usecase/delete_booklet_payment_usecase";

class DeleteBookletPaymentCommand {
  constructor(private usecase: DeleteBookletPaymentUseCase) {}

  async execute(user: Account, input: string) {
    const accessDenied = hasAccess(
      user,
      "booklet_payment",
      "Remove o status do pagamento do carnê.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await this.usecase.execute(input);
  }
}

export { DeleteBookletPaymentCommand };
