import express from "express";
import "express-async-errors";

import { ValidationErrorMiddleware } from "./middleware/validation";
import { initCorsMiddleware } from "./middleware/cors";
import planetsRoutes from "../routes/planets";

const app = express();

app.use(express.json());

app.use(initCorsMiddleware());

app.use("/planets", planetsRoutes);

app.use(ValidationErrorMiddleware);

export default app;
