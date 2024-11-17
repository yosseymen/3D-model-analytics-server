import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

import clickRoutes from "./routes/clicks";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use(
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    express.json()(req, res, next);
  }
);

app.use("/api", clickRoutes);

export default app;
