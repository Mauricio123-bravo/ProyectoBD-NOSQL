"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Servidor_1 = __importDefault(require("./configuracion/api/Servidor"));
const miServidor = new Servidor_1.default();
miServidor.iniciarServidor();
