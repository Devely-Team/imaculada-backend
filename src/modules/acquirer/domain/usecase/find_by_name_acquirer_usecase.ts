import { AsyncResult } from "../../../../core/tools/result_type";
import { AcquirerReposity } from "../../infra/repositories/acquirer_repository";
import { Acquirer } from "../model/acquirer";

class FindByNameAcquirerUseCase {
  static async execute(email: string): AsyncResult<Acquirer[]> {
    return await AcquirerReposity.findByName(email);
  }
}

export { FindByNameAcquirerUseCase };
