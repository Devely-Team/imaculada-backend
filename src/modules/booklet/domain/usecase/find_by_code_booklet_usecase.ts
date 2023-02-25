import { AsyncResult } from "../../../../core/tools/result_type";
import { BookletReposity } from "../../infra/repositories/booklet_repository";
import { singletonBookletRepository } from "../../infra/repositories/booklet_repository.instance";
import { Booklet } from "../model/booklet";

class FindByCodeBookletUseCase {
  constructor(private repo: BookletReposity) {}

  async execute(code: number): AsyncResult<Booklet[]> {
    return await this.repo.findByCode(code);
  }
}

const singletonFindByCodeBookletUseCase = new FindByCodeBookletUseCase(
  singletonBookletRepository,
);

export { FindByCodeBookletUseCase, singletonFindByCodeBookletUseCase };
