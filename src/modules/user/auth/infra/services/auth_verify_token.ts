import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { FindByIdAccountUseCase } from "../../../account/domain/usecase/find_by_id_account_usecase";

interface Input {
  token: string;
  request: Request;
  response: Response;
  next: NextFunction;
}

interface Token {
  id: string;
  email: string;
  profile: string;
  username: string;
  phone: string;
  iat: number;
}

async function verifyToken({ token, request, response, next }: Input) {
  const privateKey = process.env.JWT_PRIVATE_KEY as string;

  if (!token) {
    return response.status(403).json({
      error: "A token is required for authentication",
    });
  }
  try {
    const { id } = verify(token, privateKey) as Token;
    const result = await FindByIdAccountUseCase.execute(id);
    if (result.ok === false) {
      throw new Error("");
    }
    request.id = result.value.id;
    request.user = result.value;
  } catch (err) {
    return response.status(401).json({
      error: "Token enviado está não autorizado",
    });
  }
  return next();
}

export { verifyToken };
