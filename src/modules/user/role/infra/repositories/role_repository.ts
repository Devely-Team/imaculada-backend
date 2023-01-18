import { AsyncResult } from "../../../../../core/tools/result_type";
import { Role } from "../../domain/model/role";

interface RoleRepository {
  create(role: Role): AsyncResult<string>;
  listAll(): AsyncResult<Role[]>;
  findById(id: string): AsyncResult<Role>;
  update(role: Role): AsyncResult<boolean>;
  delete(id: string): AsyncResult<boolean>;
}

export { RoleRepository };
