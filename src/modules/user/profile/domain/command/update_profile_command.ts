import { ProfileDTO } from "../dto/create_profile_dto";
import { UpdateProfileUseCase } from "../usecase/update_profile_usecase";
import { inputProfileValidation } from "../validations/create_profile_dto.validation";

class UpdateProfileCommand {
  static async execute(input: ProfileDTO, id: string) {
    const result = inputProfileValidation(input);

    if (result.ok === false) {
      return result;
    }

    return await UpdateProfileUseCase.execute({
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      description: input.description,
      profile: input.profile,
      route: input.route,
      userId: null,
    });
  }
}

export { UpdateProfileCommand };
