import { AsyncResult } from "../../../../core/tools/result_type";
import { AcquirerReposity } from "../../infra/repositories/acquirer_repository";

class DeleteAcquirerUseCase {
  static async execute(id: string): AsyncResult<boolean> {
    return await AcquirerReposity.delete(id);
  }
}

export { DeleteAcquirerUseCase };
