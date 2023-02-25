import { AsyncResult } from "../../../../core/tools/result_type";
import { Acquirer } from "../../domain/model/acquirer";

interface AcquirerReposity {
  create(account: Acquirer): AsyncResult<string>;
  listAll(): AsyncResult<Acquirer[]>;
  findById(id: string): AsyncResult<Acquirer>;
  findByCPF(cpf: string): AsyncResult<Acquirer>;
  findByName(name: string): AsyncResult<Acquirer[]>;
  update(account: Acquirer): AsyncResult<boolean>;
  delete(id: string): AsyncResult<boolean>;
}

export { AcquirerReposity };
