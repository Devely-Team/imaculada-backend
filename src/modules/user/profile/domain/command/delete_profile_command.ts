import { DeleteProfileUseCase } from "../usecase/delete_profile_usecase";

class DeleteProfileCommand {
  constructor(private usecase: DeleteProfileUseCase) {}

  async execute(input: string) {
    return await this.usecase.execute(input);
  }
}

export { DeleteProfileCommand };
