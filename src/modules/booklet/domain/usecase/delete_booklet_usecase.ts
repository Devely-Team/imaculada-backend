import { AsyncResult } from "../../../../core/tools/result_type";
import { BookletRepository } from "../../infra/repositories/booklet_repository";

export class DeleteBookletUseCase {
  static async execute(code: number): AsyncResult<boolean> {
    return await BookletRepository.deleteByCode(code);
  }
}
