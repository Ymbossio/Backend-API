import { Router } from "express";
import { CreateRegister, UpdateRegister as UpdateRegisterTransation } from "../dominio/controllers/ControllerTransferencias";


const router = Router();

router.post('/transation', CreateRegister);
router.put('/transation/:id', UpdateRegisterTransation);

export default router;


