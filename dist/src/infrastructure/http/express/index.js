"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const entrepreneur_in_memory_repository_1 = require("../../db/entrepreneur-in-memory.repository");
const create_entrepreneur_use_case_1 = require("../../../aplication/create-entrepreneur.use-case");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
const entrepreneurRepo = new entrepreneur_in_memory_repository_1.EntrepreneurInMemoryRepository();
app.post("/entrepreneur", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createEntrepreneurUseCase = new create_entrepreneur_use_case_1.CreateEntrepreneurUseCase(entrepreneurRepo);
        const output = yield createEntrepreneurUseCase.execute(req.body);
        res.status(201).json(output);
    }
    catch (error) {
        res.status(500).json({
            message: "Erro interno no servidor",
        });
    }
}));
app.listen(port, () => console.log(`The api is running on port ${port}`));
