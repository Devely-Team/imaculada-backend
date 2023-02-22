import { AsyncResult } from "../../../../core/tools/result_type";
import { BookletReposity } from "../../infra/repositories/booklet_repository";
import { singletonBookletRepository } from "../../infra/repositories/booklet_repository.instance";
import { Booklet } from "../model/booklet";

class ListBookletUseCase {
  constructor(private repo: BookletReposity) {}

  async execute(): AsyncResult<Booklet[]> {
    return await this.repo.listAll();
  }
}

const singletonListBookletUseCase = new ListBookletUseCase(
  singletonBookletRepository,
);

export { ListBookletUseCase, singletonListBookletUseCase };
