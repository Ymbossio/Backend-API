import { Router } from "express";
import { GetAllProducts} from "../dominio/controllers/ControllerProductos";


const router = Router();
router.get('/productos', GetAllProducts);


export default router;

