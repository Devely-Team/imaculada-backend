import { AsyncResult } from "../../../../core/tools/result_type";
import { updateAcquirer } from "../../infra/repositories/acquirer_repository";
import { Acquirer, AcquirerProps } from "../model/acquirer";

export async function updateAcquirerUseCase(
  input: AcquirerProps,
): AsyncResult<boolean> {
  const account = new Acquirer(input);

  return await updateAcquirer(account);
}
