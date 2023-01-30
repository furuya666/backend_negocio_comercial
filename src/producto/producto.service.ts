/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Producto } from './interfaces/producto.interfaces';
import { CreateProductoDTO } from './dto/producto.dto';
@Injectable()
export class ProductoService {
    constructor(@InjectModel('Producto') private readonly productoModel: Model<Producto>){}
    async getProductos(): Promise<Producto[]>{
        const productos= await this.productoModel.find();
        return productos;


    }
    async getProducto(productoID:string):Promise<Producto>{
        const producto= await this.productoModel.findById(productoID);
        return producto;
    }
    async createProducro(createProductoDTO: CreateProductoDTO): Promise<Producto>{
        const producto_nuevo= new this.productoModel(createProductoDTO);
        await producto_nuevo.save();
        return producto_nuevo;
    }
    async deleteProducto(productoID: string ): Promise<Producto>{
      const producto_delete=await  this.productoModel.findByIdAndDelete(productoID);
      return producto_delete;
    }
    async updateProducto(productoID: string,createProductoDTO: CreateProductoDTO): Promise<Producto>{
        const producto_update = await this.productoModel.findByIdAndUpdate(productoID,createProductoDTO,{ new: true });
        return producto_update;
    }
}

