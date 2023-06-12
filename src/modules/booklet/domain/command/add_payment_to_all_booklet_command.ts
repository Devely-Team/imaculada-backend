import { hasAccess } from "../../../../core/tools/has_access";
import { CreateBookletPaymentUseCase } from "../../../booklet_payment/domain/usecase/create_booklet_payment_usecase";
import { SetNewStatusOfBookletPaymentUseCase } from "../../../booklet_payment/domain/usecase/set_new_status_of_booklet_payment_usecase";
import { singletonBookletPaymentReposity } from "../../../booklet_payment/infra/repositories/booklet_payment_repository";
import { Account } from "../../../user/account/domain/model/account";
import { AddManyPaymentDTO } from "../dto/add_many_payment_dto";
import { FindByCodeBookletUseCase } from "../usecase/find_by_code_booklet_usecase";
import { UpdateBookletUseCase } from "../usecase/update_booklet_usecase";

export class AddPaymentToAllBookletCommand {
  static async execute(code: string, input: AddManyPaymentDTO, user: Account) {
    const useCaseSetNewStatusOfPayment =
      new SetNewStatusOfBookletPaymentUseCase(singletonBookletPaymentReposity);
    const useCaseSetPaymentStatus = new CreateBookletPaymentUseCase(
      singletonBookletPaymentReposity,
    );

    const accessDenied = hasAccess(
      user,
      "set_payment_booklet",
      "marcar como pago os carnês.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    const result = await FindByCodeBookletUseCase.execute(Number(code));

    if (result.ok === false) {
      return result;
    }

    result.value.forEach(async booklet => {
      if (
        booklet.bookletPayment !== null &&
        booklet.bookletPayment !== undefined
      ) {
        if (
          booklet.bookletPayment?.isPaid !== true &&
          booklet.bookletPayment?.status !== "Paid"
        ) {
          await useCaseSetNewStatusOfPayment.execute(
            {
              isPaid: true,
              status: "Paid",
              payDay: input.payDay,
              typePayment: input.typePayment,
            },
            booklet.id,
          );
        }
      } else {
        const paymentAdded = await useCaseSetPaymentStatus.execute({
          bookletId: booklet.id,
          isPaid: true,
          status: "Paid",
          payDay: input.payDay,
          typePayment: input.typePayment,
        });

        if (paymentAdded.ok) {
          UpdateBookletUseCase.execute(paymentAdded.value, booklet.id);
        }
      }
    });

    return result;
  }
}
