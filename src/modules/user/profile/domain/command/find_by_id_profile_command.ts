import { FindByIdProfileUseCase } from "../usecase/find_by_id_profile_usecase";

class FindbyIdProfileCommand {
  static async execute(input: string) {
    return await FindByIdProfileUseCase.execute(input);
  }
}

export { FindbyIdProfileCommand };
