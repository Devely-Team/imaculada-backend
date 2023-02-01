import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

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

function verifyToken({ token, request, response, next }: Input) {
  const privateKey = process.env.JWT_PRIVATE_KEY as string;

  if (!token) {
    return response.status(403).json({
      error: "A token is required for authentication",
    });
  }
  try {
    const { id } = verify(token, privateKey) as Token;
    request.id = id;
  } catch (err) {
    return response.status(401).json({
      error: "Invalid Token",
    });
  }
  return next();
}

export { verifyToken };
