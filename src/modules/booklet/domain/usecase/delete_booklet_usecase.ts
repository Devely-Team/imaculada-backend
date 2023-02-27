import { AsyncResult } from "../../../../core/tools/result_type";
import { BookletReposity } from "../../infra/repositories/booklet_repository";
import { singletonBookletRepository } from "../../infra/repositories/booklet_repository.instance";

class DeleteBookletUseCase {
  constructor(private repo: BookletReposity) {}

  async execute(code: number): AsyncResult<boolean> {
    return await this.repo.deleteByCode(code);
  }
}

const singletonDeleteBookletUseCase = new DeleteBookletUseCase(
  singletonBookletRepository,
);

export { DeleteBookletUseCase, singletonDeleteBookletUseCase };
