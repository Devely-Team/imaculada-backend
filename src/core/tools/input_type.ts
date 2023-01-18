import { NextFunction, Response, Request } from "express";

import { RequestBodyParse } from "../utils/request_body_parse";

interface Input<T> {
  request: RequestBodyParse<T>;
  response: Response;
  next: NextFunction;
}

interface InputBase {
  request: Request;
  response: Response;
  next: NextFunction;
}

export { Input, InputBase };
