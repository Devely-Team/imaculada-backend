import { BadRequestError } from "../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../core/error/base_error";
import { hasAccess } from "../../../../core/tools/has_access";
import { Failure } from "../../../../core/tools/result_type";
import { CreateBookletPaymentDTO } from "../../../booklet_payment/domain/dto/booklet_payment_dto";
import { CreateBookletPaymentUseCase } from "../../../booklet_payment/domain/usecase/create_booklet_payment_usecase";
import { SetNewStatusOfBookletPaymentUseCase } from "../../../booklet_payment/domain/usecase/set_new_status_of_booklet_payment_usecase";
import { singletonBookletPaymentReposity } from "../../../booklet_payment/infra/repositories/booklet_payment_repository";
import { Account } from "../../../user/account/domain/model/account";
import { FindByIdBookletUseCase } from "../usecase/find_by_id_booklet_usecase";
import { UpdateBookletUseCase } from "../usecase/update_booklet_usecase";

class AddPaymentToBookletCommand {
  static async execute(
    input: CreateBookletPaymentDTO,
    id: string,
    user: Account,
  ) {
    const useCaseSetNewStatusOfPayment =
      new SetNewStatusOfBookletPaymentUseCase(singletonBookletPaymentReposity);
    const useCaseSetPaymentStatus = new CreateBookletPaymentUseCase(
      singletonBookletPaymentReposity,
    );

    const accessDenied = hasAccess(
      user,
      "set_payment_booklet",
      "marcar como pago o carnê.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    const result = await FindByIdBookletUseCase.execute(id);

    if (result.ok === false) {
      return result;
    }

    if (
      result.value.bookletPayment !== null &&
      result.value.bookletPayment !== undefined
    ) {
      if (
        result.value.bookletPayment?.isPaid === true &&
        result.value.bookletPayment?.status === "Paid"
      ) {
        return Failure(
          new BadRequestError(
            BaseErrorCodes.objectValidation,
            "Este carnê já foi pago.",
            "Este carnê já foi pago.",
          ),
        );
      }

      return await useCaseSetNewStatusOfPayment.execute(
        {
          isPaid: input.isPaid,
          payDay: input.payDay,
          status: input.status,
          typePayment: input.typePayment,
        },
        result.value.bookletPayment.id,
      );
    }

    const paymentAdded = await useCaseSetPaymentStatus.execute(input);

    if (paymentAdded.ok === false) {
      return paymentAdded;
    }

    return UpdateBookletUseCase.execute(paymentAdded.value, result.value.id);
  }
}

export { AddPaymentToBookletCommand };
