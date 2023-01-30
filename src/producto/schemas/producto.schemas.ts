/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';
export const ProductoSchema =new Schema({
    nombre: { type: String , required: true},
    descripcion: String,
    imagenURL: String,
    precio: Number,
    createAt : {
        type: Date,
        default: Date.now
    }

});
