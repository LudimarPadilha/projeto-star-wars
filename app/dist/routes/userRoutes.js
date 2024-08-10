"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importando bibliotecas e dependencias.
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.post('/', userController_1.createUsuario);
exports.default = router;
