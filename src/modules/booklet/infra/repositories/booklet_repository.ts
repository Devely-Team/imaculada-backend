import { AsyncResult } from "../../../../core/tools/result_type";
import { Booklet } from "../../domain/model/booklet";

interface BookletReposity {
  create(booklet: Booklet): AsyncResult<string>;
  listAll(): AsyncResult<Booklet[]>;
  findById(id: string): AsyncResult<Booklet>;
  findByCode(code: number): AsyncResult<Booklet[]>;
  findByAcquirer(acquirerId: string): AsyncResult<Booklet[]>;
  update(account: Booklet): AsyncResult<Booklet>;
  setPayment(paymentId: string, id: string): AsyncResult<boolean>;
  delete(id: string): AsyncResult<boolean>;
  deleteByCode(code: number): AsyncResult<boolean>;
}

export { BookletReposity };
