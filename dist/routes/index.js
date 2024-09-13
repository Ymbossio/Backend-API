"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerTransferencias_1 = require("../dominio/controllers/ControllerTransferencias");
const router = (0, express_1.Router)();
router.post('/transation', ControllerTransferencias_1.CreateRegister);
router.put('/transation/:id', ControllerTransferencias_1.UpdateRegister);
exports.default = router;
