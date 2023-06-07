import { AnalitycsRepository } from "../../infra/repositories/analitycs_repository";

export class ListAllBooketUnPaydUseCase {
  static async execute(quota: number) {
    return await AnalitycsRepository.getBookletNotPayd(quota);
  }
}
