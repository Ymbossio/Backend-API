import { Router } from "express";
import { getAllProducts} from "../domains/controllers/ControllerProductos";


const router = Router();
router.get('/products', getAllProducts);


export default router;

