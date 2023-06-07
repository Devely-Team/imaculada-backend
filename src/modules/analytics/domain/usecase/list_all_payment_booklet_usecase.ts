import { AnalitycsRepository } from "../../infra/repositories/analitycs_repository";

export class ListAllPaymentBookletUseCase {
  static async execute() {
    return await AnalitycsRepository.getBookletPayd();
  }
}
