import { BookletRepository } from "../../infra/repositories/booklet_repository";
import { CreateSingleBookletDTO } from "../dto/create_single_booklet_dto";
import { Booklet } from "../model/booklet";

export class CreateSingleBookletUseCase {
  static async execute(input: CreateSingleBookletDTO) {
    const booklet = Booklet.create({
      id: "input.id",
      quota: input.quota,
      acquirerId: input.acquirerId,
      campaignId: input.campaignId,
      codeBooklet: input.codeBooklet,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return await BookletRepository.create(booklet);
  }
}
