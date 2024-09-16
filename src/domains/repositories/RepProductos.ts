import { Producto } from '../../model/productos';

export const getAllProductsDB = async () => {
  try {
    const products = await Producto.findAll();
    return products;
  } catch (error) {
    throw new Error('Error get all products: '+ error);
  }
};
