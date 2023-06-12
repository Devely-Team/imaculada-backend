import { AsyncResult } from "../../../../core/tools/result_type";
import { BookletRepository } from "../../infra/repositories/booklet_repository";
import { Booklet } from "../model/booklet";

export class ListBookletUseCase {
  static async execute(): AsyncResult<Booklet[]> {
    return await BookletRepository.listAll();
  }
}
