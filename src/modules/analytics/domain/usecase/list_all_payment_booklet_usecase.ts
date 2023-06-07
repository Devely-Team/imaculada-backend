import { AnalitycsRepository } from "../../infra/repositories/analitycs_repository";

export class ListAllPaymentBookletUseCase {
  static async execute(quota: number) {
    return await AnalitycsRepository.getBookletPayd(quota);
  }
}
