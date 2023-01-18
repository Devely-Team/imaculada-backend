import { Express } from "express";

class Runner {
  execute(app: Express): void {
    const port = process.env.PORT;

    app.listen(port, () =>
      console.log(
        `🚧 [server]: Server is running at https://localhost:${port}`,
      ),
    );
  }
}

const RunnerSingleton = new Runner();

export { RunnerSingleton };
