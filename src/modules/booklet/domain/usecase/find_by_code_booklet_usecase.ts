import { AsyncResult } from "../../../../core/tools/result_type";
import { BookletRepository } from "../../infra/repositories/booklet_repository";
import { Booklet } from "../model/booklet";

export class FindByCodeBookletUseCase {
  static async execute(code: number): AsyncResult<Booklet[]> {
    return await BookletRepository.findByCode(code);
  }
}
