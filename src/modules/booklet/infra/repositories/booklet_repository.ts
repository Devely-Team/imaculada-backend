import { AsyncResult } from "../../../../core/tools/result_type";
import { Booklet } from "../../domain/model/booklet";

interface BookletReposity {
  create(booklet: Booklet): AsyncResult<string>;
  listAll(): AsyncResult<Booklet[]>;
  findById(id: string): AsyncResult<Booklet>;
  findByCode(code: number): AsyncResult<Booklet>;
  update(account: Booklet): AsyncResult<boolean>;
  delete(id: string): AsyncResult<boolean>;
}

export { BookletReposity };
