import { ListProfileUseCase } from "../usecase/list_profile_usecase";

class ListAllProfileCommand {
  static async execute() {
    return await ListProfileUseCase.execute();
  }
}

export { ListAllProfileCommand };
