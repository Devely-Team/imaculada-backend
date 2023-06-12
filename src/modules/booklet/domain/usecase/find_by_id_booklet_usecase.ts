import { AsyncResult } from "../../../../core/tools/result_type";
import { BookletRepository } from "../../infra/repositories/booklet_repository";
import { Booklet } from "../model/booklet";

export class FindByIdBookletUseCase {
  static async execute(id: string): AsyncResult<Booklet> {
    return await BookletRepository.findById(id);
  }
}
