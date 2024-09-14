import { Router } from "express";
import { getAllProducts} from "../dominio/controllers/ControllerProductos";


const router = Router();
router.get('/productos', getAllProducts);


export default router;

