import { Router } from "express";
import { CreateRegister } from "../dominio/controllers/ControllerTransferencias";


const router = Router();

router.post('/transation', CreateRegister);

export default router;


