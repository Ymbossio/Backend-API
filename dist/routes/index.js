"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerTransferencias_1 = require("../dominio/controllers/ControllerTransferencias");
const router = (0, express_1.Router)();
router.post('/transation', ControllerTransferencias_1.CreateRegister);
exports.default = router;
