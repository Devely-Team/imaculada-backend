import { CreateProfileCommand } from "../../domain/command/create_profile_command";
import { DeleteProfileCommand } from "../../domain/command/delete_profile_command";
import { FindbyIdProfileCommand } from "../../domain/command/find_by_id_profile_command";
import { ListAllProfileCommand } from "../../domain/command/list_all_profile_command";
import { UpdateProfileCommand } from "../../domain/command/update_profile_command";
import { singletonCreateProfileUseCase } from "../../domain/usecase/create_profile_usecase";
import { singletonDeleteProfileUseCase } from "../../domain/usecase/delete_profile_usecase";
import { singletonFindByIdProfileUseCase } from "../../domain/usecase/find_by_id_profile_usecase";
import { singletonListProfileUseCase } from "../../domain/usecase/list_profile_usecase";
import { singletonUpdateProfileUseCase } from "../../domain/usecase/update_profile_usecase";
import { CreateProfileController } from "../../infra/controller/create_profile_controller";
import { DeleteProfileController } from "../../infra/controller/delete_profile_controller";
import { FindByIdProfileController } from "../../infra/controller/find_by_id_profile_controller";
import { ListAllProfileController } from "../../infra/controller/list_all_profile_controller";
import { UpdateProfileController } from "../../infra/controller/update_profile_controller";

// ? Create Profile
const createProfileCommand = new CreateProfileCommand(
  singletonCreateProfileUseCase,
);
const createProfileController = new CreateProfileController(
  createProfileCommand,
);

// ? List All Profile
const listAllProfileCommand = new ListAllProfileCommand(
  singletonListProfileUseCase,
);
const listAllProfileController = new ListAllProfileController(
  listAllProfileCommand,
);

// ? Find By Id Profile
const findbyIdProfileCommand = new FindbyIdProfileCommand(
  singletonFindByIdProfileUseCase,
);
const findByIdProfileController = new FindByIdProfileController(
  findbyIdProfileCommand,
);

// ? Update Profile
const updateProfileCommand = new UpdateProfileCommand(
  singletonUpdateProfileUseCase,
);
const updateProfileController = new UpdateProfileController(
  updateProfileCommand,
);

// ? Delete Profile
const deleteProfileCommand = new DeleteProfileCommand(
  singletonDeleteProfileUseCase,
);
const deleteProfileController = new DeleteProfileController(
  deleteProfileCommand,
);

// * Export controllers

export {
  createProfileController,
  listAllProfileController,
  findByIdProfileController,
  updateProfileController,
  deleteProfileController,
};
