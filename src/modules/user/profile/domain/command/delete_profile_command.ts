import { DeleteProfileUseCase } from "../usecase/delete_profile_usecase";

class DeleteProfileCommand {
  static async execute(input: string) {
    return await DeleteProfileUseCase.execute(input);
  }
}

export { DeleteProfileCommand };
