/* eslint-disable prettier/prettier */
import { Document } from "mongoose";
export interface Producto extends Document {
    readonly nombre: string;
    readonly descripcion: string;
    readonly imagenURL: string;
    readonly precio: number;
    readonly createAt: Date;


}