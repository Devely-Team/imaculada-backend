import { AnalitycsRepository } from "../../infra/repositories/analitycs_repository";

export class ListAllBooketUnPaydUseCase {
  static async execute() {
    return await AnalitycsRepository.getBookletNotPayd();
  }
}
