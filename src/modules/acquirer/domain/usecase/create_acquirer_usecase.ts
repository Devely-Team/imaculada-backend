import { AsyncResult } from "../../../../core/tools/result_type";
import { AcquirerReposity } from "../../infra/repositories/acquirer_repository";
import { Acquirer, AcquirerProps } from "../model/acquirer";

class CreateAcquirerUseCase {
  static async execute(input: AcquirerProps): AsyncResult<string> {
    const account = new Acquirer(input);

    return await AcquirerReposity.create(account);
  }
}

export { CreateAcquirerUseCase };
