/* eslint-disable prettier/prettier */
import { Controller, Post, Res, Body, HttpStatus, Get, Param, Put, Delete, Query } from '@nestjs/common';
import { CreateProductoDTO } from './dto/producto.dto';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
constructor(private productoService: ProductoService){}
@Post('/create')
async createPost(@Res() res,@Body() createProductoDTO: CreateProductoDTO){
    //console.log(createProductoDTO);
    const producto = await this.productoService.createProducro(createProductoDTO);
    return  res.status(HttpStatus.OK).json({
        message: 'producto creado',
        producto_nuevo: producto
    })
}
 @Get('/')
 async getProductos(@Res() res){
    const productos = await this.productoService.getProductos();
    return res.status(HttpStatus.OK).json({
        message: 'lista de productos',
        productos: productos
    })

 }
 @Get('/:productoID')
 async getProducto(@Res() res, @Param('productoID') productoID ){

    const producto =await this.productoService.getProducto(productoID);
    return res.status(HttpStatus.OK).json({
        message: 'Producto encontrado',
        producto: producto
    })
 }
 @Delete('/')
 async deleteProducto(@Res() res,@Query('productoID') productoID){
    const producto =await this.productoService.deleteProducto(productoID);
    
    return res.status(HttpStatus.OK).json({
        message: 'Producto eliminado',
        producto: producto
    })

 }
 @Put('/')
 async updateProducto(@Res() res ,@Body() createProductoDTO:CreateProductoDTO, @Query('productoID')productoID){
    const producto = await this.productoService.updateProducto(productoID,createProductoDTO);
    return res.status(HttpStatus.OK).json({
        message: 'Producto actualizado',
        producto: producto
    })

 }
 

}
