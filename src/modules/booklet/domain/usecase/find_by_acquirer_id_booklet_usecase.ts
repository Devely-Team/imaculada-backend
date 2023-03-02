import { BookletReposity } from "../../infra/repositories/booklet_repository";
import { singletonBookletRepository } from "../../infra/repositories/booklet_repository.instance";

class FindByAcquirerIdBookletUseCase {
  constructor(private repo: BookletReposity) {}

  async execute(id: string) {
    return await this.repo.findByAcquirer(id);
  }
}

const singletonFindByAcquirerIdBookletUseCase =
  new FindByAcquirerIdBookletUseCase(singletonBookletRepository);

export {
  FindByAcquirerIdBookletUseCase,
  singletonFindByAcquirerIdBookletUseCase,
};
