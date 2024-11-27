import { Router } from "express";
import { 
    getAllPlatos,
    getPlatoById,
    postPlato,
    putPlato,
    deletePlato
} from "../controller/restaurante.controller.js";

const restaurante = Router();

restaurante.get('/', getAllPlatos)
restaurante.get('/:id', getPlatoById)
restaurante.post('/', postPlato)
restaurante.put('/:id', putPlato)
restaurante.delete('/:id', deletePlato)

export default restaurante;