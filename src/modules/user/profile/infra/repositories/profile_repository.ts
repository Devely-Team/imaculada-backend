import { AsyncResult } from "../../../../../core/tools/result_type";
import { Profile } from "../../domain/model/profile";

interface ProfileRepository {
  create(profile: Profile): AsyncResult<string>;
  listAll(): AsyncResult<Profile[]>;
  findById(id: string): AsyncResult<Profile>;
  findByUserLogged(userId: string): AsyncResult<Profile[]>;
  update(profile: Profile): AsyncResult<boolean>;
  delete(id: string): AsyncResult<boolean>;
}

export { ProfileRepository };
