import { BadRequestError } from "../../../../core/error/bad_request_error";
import { BaseErrorCodes } from "../../../../core/error/base_error";
import { Failure, Success } from "../../../../core/tools/result_type";
import { AnalitycsRepository } from "../../infra/repositories/analitycs_repository";

export class GetBookletDoesntExistUseCase {
  static async execute() {
    const aPayd = await AnalitycsRepository.getBookletNotPayd(11);
    const bPayd = await AnalitycsRepository.getBookletNotPayd(12);

    if (aPayd.ok && bPayd.ok) {
      const value = aPayd.value.filter(
        a => !bPayd.value.some(b => b.codeBooklet === a.codeBooklet),
      );

      return Success(value);
    }

    return Failure(
      new BadRequestError(
        BaseErrorCodes.objectValidation,
        "Erro ao buscar os dados",
        "Erro ao buscar os dados",
      ),
    );
  }
}
