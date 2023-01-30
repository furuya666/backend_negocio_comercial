/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { MongooseModule} from '@nestjs/mongoose';
import { ProductoSchema } from './schemas/producto.schemas';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Producto', schema:ProductoSchema}
    ])
  ],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}
