import { Express } from "express";

export class Runner {
  static execute(app: Express): void {
    const port = process.env.PORT;

    app.listen(port, () =>
      console.log(
        `🚧 [server]: Server is running at https://localhost:${port}`,
      ),
    );
  }
}
