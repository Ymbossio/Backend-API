import { Router } from "express";
import { getAllProducts} from "../domains/controllers/ControllerProductos";


const router = Router();
router.get('/productos', getAllProducts);


export default router;

