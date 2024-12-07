import { sign } from "jsonwebtoken";

import { Account } from "../../../account/domain/model/account";

function createToken(sponsorAccount: Account) {
  const privateKey = process.env.JWT_PRIVATE_KEY as string;

  return sign(
    {
      id: sponsorAccount.id,
      email: sponsorAccount.email,
      username: sponsorAccount.username,
    },
    privateKey,
    {
      algorithm: "HS256",
    },
  );
}

export { createToken };
