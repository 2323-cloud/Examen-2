import mongoose from "mongoose";
import Plato from "../model/restaurante.model.js";

export const getAllPlatos = async (req, res) => {
    console.log('Obteniendo todos los platos');
    try {
        const platos = await Plato.find({}, { __v: 0 });
        if (platos.length === 0) {
            return res.status(404).json({
                msg: 'No hay platos disponibles'
            });
        }
        return res.status(200).json({
            platos
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener los platos'
        });
    }
}

export const getPlatoById = async (req, res) => {
    console.log('Obteniendo plato por ID');
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        const plato = await Plato.findById(id);
        if (!plato) {
            return res.status(404).json({
                msg: 'Plato no encontrado'
            });
        }
        return res.status(200).json({
            plato
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener el plato'
        });
    }
}

export const postPlato = async (req, res) => {
    console.log('Añadiendo nuevo plato');
    const body = req.body;
    const plato = new Plato(body);
    try {
        const validationError = plato.validateSync();
        if (validationError) {
            const errorMessages = Object.values(validationError.errors).map(error => error.message);
            return res.status(400).json({
                error: errorMessages
            });
        }
        await plato.save();
        return res.status(201).json({
            plato
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al guardar el plato'
        });
    }
}

export const putPlato = async (req, res) => {
    console.log('Actualizando plato');
    const id = req.params.id;
    const body = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }
        const plato = await Plato.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        if (!plato) {
            return res.status(404).json({
                msg: 'Plato no encontrado'
            });
        }

        return res.status(200).json({
            plato
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al actualizar el plato'
        });
    }
}

export const deletePlato = async (req, res) => {
    console.log('Eliminando plato por ID');
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }
        const plato = await Plato.findByIdAndDelete(id);
        if (!plato) {
            return res.status(404).json({
                msg: 'Plato no encontrado'
            });
        }
        return res.status(200).json({
            msg: 'Plato eliminado'
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al eliminar el plato'
        });
    }
}
