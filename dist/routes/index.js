"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerTransferencias_1 = require("../domains/controllers/ControllerTransferencias");
const router = (0, express_1.Router)();
router.post('/transaction', ControllerTransferencias_1.createTransfer);
exports.default = router;
