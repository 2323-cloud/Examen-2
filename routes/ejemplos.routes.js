import { Router } from "express";
import { 
    getAllEjemplo,
    getIDEjemplo,
    postEjemplo,
    putEjemplo,
    deleteEjemplo
} from "../controller/ejemplos.controller.js";

const ejemplo = Router()

ejemplo
    .get('/', getAllEjemplo)
    .get('/:id', getIDEjemplo)
    .post('/', postEjemplo)
    .put('/:id', putEjemplo)
    .delete('/:id', deleteEjemplo)

export default ejemplo