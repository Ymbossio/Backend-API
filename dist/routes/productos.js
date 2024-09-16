"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerProductos_1 = require("../domains/controllers/ControllerProductos");
const router = (0, express_1.Router)();
router.get('/productos', ControllerProductos_1.getAllProducts);
exports.default = router;
