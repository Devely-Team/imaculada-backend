import { BadRequestError } from "../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../core/error/base_error";
import { hasAccess } from "../../../../core/tools/has_access";
import { Failure, Success } from "../../../../core/tools/result_type";
import { Account } from "../../../user/account/domain/model/account";
import { ListBookletUseCase } from "../usecase/list_booklet_usecase";
import { StatusPaymentBookletCommand } from "./status_payment_booklet_command";

class ListAllBookletCommand {
  constructor(
    private usecase: ListBookletUseCase,
    private command: StatusPaymentBookletCommand,
  ) {}

  async execute(user: Account) {
    const accessDenied = hasAccess(
      user,
      "list_booklet",
      "listar os carnês do adquirente.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    const result = await this.usecase.execute();

    if (result.ok === false) {
      return result;
    }

    const map = result.value.map(async booklet => {
      const status = await this.command.execute(`${booklet.codeBooklet}`, user);

      return {
        id: booklet.id,
        codeBooklet: booklet.codeBooklet,
        quota: booklet.quota,
        bookletPayment: booklet.bookletPayment,
        acquirer: booklet.acquirer,
        status: status.ok === true ? status.value.status : null,
        createdAt: booklet.createdAt,
        updatedAt: booklet.updatedAt,
      };
    });

    return Promise.all(map)
      .then(result => {
        return Success(result);
      })
      .catch(error => {
        return Failure(
          new BadRequestError(
            BaseErrorCodes.objectValidation,
            "Não foi possível listar os carnês.",
            error.message,
          ),
        );
      });
  }
}

export { ListAllBookletCommand };
