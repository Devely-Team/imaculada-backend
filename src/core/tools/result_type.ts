import { BaseError } from "../error/base_error";

type ResultType<T, E = undefined> =
  | { ok: true; value: T }
  | { ok: false; error: E | undefined };

const Success = <T>(data: T): ResultType<T, never> => {
  return { ok: true, value: data };
};

const Failure = <E>(error?: E): ResultType<never, E> => {
  return { ok: false, error };
};

type AsyncResult<T> = Promise<ResultType<T, BaseError>>;
type Result<T> = ResultType<T, BaseError>;

export { AsyncResult, Result, Success, Failure };
