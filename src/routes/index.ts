import { Router } from "express";
import { createTransfer } from "../domains/controllers/ControllerTransferencias";

const router = Router();

router.post('/transaction', createTransfer);

export default router;


