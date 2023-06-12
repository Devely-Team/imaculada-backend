import { AsyncResult, Success } from "../../../../core/tools/result_type";
import { BookletRepository } from "../../infra/repositories/booklet_repository";
import { Booklet } from "../model/booklet";

export class CreateBookletUseCase {
  static async execute(input: Booklet[]): AsyncResult<boolean> {
    input.forEach(async e => await BookletRepository.create(e));

    return Success(true);
  }
}
