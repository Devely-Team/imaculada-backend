import { AsyncResult } from "../../../../core/tools/result_type";
import { findByNameAcquirer } from "../../infra/repositories/acquirer_repository";
import { Acquirer } from "../model/acquirer";

class FindByNameAcquirerUseCase {
  static async execute(email: string): AsyncResult<Acquirer[]> {
    return await findByNameAcquirer(email);
  }
}

export { FindByNameAcquirerUseCase };
