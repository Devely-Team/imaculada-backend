import { ListProfileUseCase } from "../usecase/list_profile_usecase";

class ListAllProfileCommand {
  constructor(private usecase: ListProfileUseCase) {}

  async execute() {
    return await this.usecase.execute();
  }
}

export { ListAllProfileCommand };
