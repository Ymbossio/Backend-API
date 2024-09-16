import {Producto} from '../../model/productos';

export const getAllProductsDB = async () => {
  try {
    const productos = await Producto.findAll();
    return productos;
  } catch (error) {
    throw new Error('Error al obtener productos: ' + error);
  }
};
