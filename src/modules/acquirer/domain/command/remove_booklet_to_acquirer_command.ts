import { BadRequestError } from "../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../core/error/base_error";
import { hasAccess } from "../../../../core/tools/has_access";
import { Failure } from "../../../../core/tools/result_type";
import { singletonDeleteBookletUseCase } from "../../../booklet/domain/usecase/delete_booklet_usecase";
import { singletonFindByCodeBookletUseCase } from "../../../booklet/domain/usecase/find_by_code_booklet_usecase";
import { Account } from "../../../user/account/domain/model/account";

class RemoveBookletToAcquirerCommand {
  static async execute(codeBooklet: number, user: Account) {
    const usecaseList = singletonFindByCodeBookletUseCase;
    const usecaseDelete = singletonDeleteBookletUseCase;

    const accessDenied = hasAccess(
      user,
      "remove_booklet_to_acquirer",
      "Adicionar novos carnês ao adquirente.",
    );

    if (accessDenied.ok === false) {
      return accessDenied;
    }

    const bookletResult = await usecaseList.execute(codeBooklet);

    if (bookletResult.ok === false) {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.databaseError,
          "Carnê não encontrado",
          `Não existe carnê com o numero do carnê: ${codeBooklet}`,
        ),
      );
    }

    const booklet = bookletResult.value;

    const isPossibleToRemoveBooklet = booklet.filter(e => {
      return e.paymentBookId !== null;
    });

    if (isPossibleToRemoveBooklet.length > 0) {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.databaseError,
          "Carnê encontrado, porém ele possui pagamento realizado.",
          `Existe carnê com parcelas pagas. Numero do carnê: ${codeBooklet}`,
        ),
      );
    }

    return await usecaseDelete.execute(codeBooklet);
  }
}

export { RemoveBookletToAcquirerCommand };
