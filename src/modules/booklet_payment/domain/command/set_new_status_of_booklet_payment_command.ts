import { hasAccess } from "../../../../core/tools/has_access";
import { Account } from "../../../user/account/domain/model/account";
import { CreateBookletPaymentDTO } from "../dto/booklet_payment_dto";
import { CreateBookletPaymentUseCase } from "../usecase/create_booklet_payment_usecase";

class CreateBookletPaymentCommand {
  static async execute(user: Account, input: CreateBookletPaymentDTO) {
    const accessDenied = hasAccess(
      user,
      "set_booklet_payment",
      "Adicionar o status do pagamento do carnê.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    return await CreateBookletPaymentUseCase.execute(input, user);
  }
}

export { CreateBookletPaymentCommand };
