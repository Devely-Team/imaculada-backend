/* eslint-disable @typescript-eslint/naming-convention */
import "express";

declare module "express" {
  interface Request {
    id?: string;
    user?: Account;
  }
}
