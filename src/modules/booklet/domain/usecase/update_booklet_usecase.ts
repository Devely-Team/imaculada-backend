import { AsyncResult } from "../../../../core/tools/result_type";
import { BookletReposity } from "../../infra/repositories/booklet_repository";
import { singletonBookletRepository } from "../../infra/repositories/booklet_repository.instance";
import { Booklet, BookletProps } from "../model/booklet";

class UpdateBookletUseCase {
  constructor(private repo: BookletReposity) {}

  async execute(input: BookletProps): AsyncResult<boolean> {
    const account = new Booklet(input);

    // const result = profile.validations(profile);

    // if (result.ok === false) {
    //   return result;
    // }

    return await this.repo.update(account);
  }
}

const singletonUpdateBookletUseCase = new UpdateBookletUseCase(
  singletonBookletRepository,
);

export { UpdateBookletUseCase, singletonUpdateBookletUseCase };
