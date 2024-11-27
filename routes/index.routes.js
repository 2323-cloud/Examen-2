import { Router } from "express";
import ejemplo from "./ejemplos.routes.js";
import restaurante from "./restaurante.routes.js";

const indexRouter = Router();

indexRouter.use('/ejemplos', ejemplo)
indexRouter.use('/restaurante', restaurante)

export default indexRouter