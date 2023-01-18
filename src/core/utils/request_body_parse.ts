import { Request } from "express";

interface RequestBodyParse<T> extends Request {
  query: any;
  body: T;
}

export { RequestBodyParse };
