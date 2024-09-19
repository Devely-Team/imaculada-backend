import { BadRequestError } from "../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../core/error/base_error";
import { hasAccess } from "../../../../core/tools/has_access";
import { Failure } from "../../../../core/tools/result_type";
import { findByCodeBookletUseCaseImpl } from "../../../booklet/domain/usecase/find_by_code_booklet_usecase";
import { Account } from "../../../user/account/domain/model/account";
import { findByIdAcquirer } from "../../infra/repositories/acquirer_repository";

export async function findbyCodeAcquirerCommand(input: number, user: Account) {
  const accessDenied = hasAccess(
    user,
    "list_all_purchaser",
    "listar todos os adquirentes",
  );

  if (accessDenied.ok === false) {
    return accessDenied;
  }

  try {
    const booklets = await findByCodeBookletUseCaseImpl(input);

    if (booklets.ok === false) {
      return Failure(
        new BadRequestError(
          BaseErrorCodes.databaseError,
          "Adquirente não encontrado",
          "Adquirente não existe a parti dos dados informados",
        ),
      );
    }

    const { acquirerId } = booklets.value[0];

    return await findByIdAcquirer(acquirerId);
  } catch (error) {
    console.log(error);

    return Failure(
      new BadRequestError(
        BaseErrorCodes.databaseError,
        "Adquirente não encontrado",
        "Adquirente não existe a parti dos dados informados",
      ),
    );
  }
}
