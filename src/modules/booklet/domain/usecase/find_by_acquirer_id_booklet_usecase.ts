import { BookletRepository } from "../../infra/repositories/booklet_repository";

export class FindByAcquirerIdBookletUseCase {
  static async execute(id: string) {
    return await BookletRepository.findByAcquirer(id);
  }
}
