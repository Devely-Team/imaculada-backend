import { AsyncResult, Success } from "../../../../core/tools/result_type";
import { BookletReposity } from "../../infra/repositories/booklet_repository";
import { singletonBookletRepository } from "../../infra/repositories/booklet_repository.instance";
import { Booklet } from "../model/booklet";

class CreateBookletUseCase {
  constructor(private repo: BookletReposity) {}

  async execute(input: Booklet[]): AsyncResult<boolean> {
    input.forEach(async e => await this.repo.create(e));

    return Success(true);
  }
}

const singletonCreateBookletUseCase = new CreateBookletUseCase(
  singletonBookletRepository,
);

export { CreateBookletUseCase, singletonCreateBookletUseCase };
