import { ProfileDTO } from "../dto/create_profile_dto";
import { CreateProfileUseCase } from "../usecase/create_profile_usecase";
import { inputProfileValidation } from "../validations/create_profile_dto.validation";

class CreateProfileCommand {
  static async execute(input: ProfileDTO) {
    const result = inputProfileValidation(input);

    if (result.ok === false) {
      return result;
    }

    return await CreateProfileUseCase.execute({
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      description: input.description,
      route: input.route,
      profile: input.profile,
      userId: null,
    });
  }
}

export { CreateProfileCommand };
