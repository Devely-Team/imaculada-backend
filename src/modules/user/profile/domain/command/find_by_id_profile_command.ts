import { FindByIdProfileUseCase } from "../usecase/find_by_id_profile_usecase";

class FindbyIdProfileCommand {
  constructor(private usecase: FindByIdProfileUseCase) {}

  async execute(input: string) {
    return await this.usecase.execute(input);
  }
}

export { FindbyIdProfileCommand };
