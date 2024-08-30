import { AsyncResult } from "../../../../core/tools/result_type";
import { findByCPFAcquirer } from "../../infra/repositories/acquirer_repository";
import { Acquirer } from "../model/acquirer";

export async function findByCPFAcquirerUseCase(
  cpf: string,
): AsyncResult<Acquirer> {
  return await findByCPFAcquirer(cpf);
}
