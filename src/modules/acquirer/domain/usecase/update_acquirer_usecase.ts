import { AsyncResult } from "../../../../core/tools/result_type";
import { updateAcquirer } from "../../infra/repositories/acquirer_repository";
import { Acquirer, AcquirerProps } from "../model/acquirer";

class UpdateAcquirerUseCase {
  static async execute(input: AcquirerProps): AsyncResult<boolean> {
    const account = new Acquirer(input);

    // const result = profile.validations(profile);

    // if (result.ok === false) {
    //   return result;
    // }

    return await updateAcquirer(account);
  }
}

export { UpdateAcquirerUseCase };
