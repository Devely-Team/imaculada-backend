import { AsyncResult } from "../../../../core/tools/result_type";
import { BookletReposity } from "../../infra/repositories/booklet_repository";
import { singletonBookletRepository } from "../../infra/repositories/booklet_repository.instance";
import { Booklet } from "../model/booklet";

class FindByIdBookletUseCase {
  constructor(private repo: BookletReposity) {}

  async execute(id: string): AsyncResult<Booklet> {
    return await this.repo.findById(id);
  }
}

const singletonFindByIdBookletUseCase = new FindByIdBookletUseCase(
  singletonBookletRepository,
);

export { FindByIdBookletUseCase, singletonFindByIdBookletUseCase };
