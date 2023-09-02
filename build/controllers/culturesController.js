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
Object.defineProperty(exports, "__esModule", { value: true });
exports.culturesController = void 0;
const database_1 = require("../database");
class CulturesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield (0, database_1.connect)();
            pool.query("SELECT * FROM cultures")
                .then((response) => {
                res.json(response[0]);
            })
                .catch((error) => {
                res.json(error);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pool = yield (0, database_1.connect)();
            pool.query("SELECT * FROM cultures WHERE id_culture = ?", [id])
                .then((response) => {
                if (response.length > 0) {
                    res.json(JSON.parse(JSON.stringify(response[0]).slice(1, -1)));
                }
                else {
                    res.status(404).json({
                        text: `The recipe ${[id]} doesn't exist`,
                    });
                }
            })
                .catch((error) => {
                res.json(error);
            });
        });
    }
}
exports.culturesController = new CulturesController();
