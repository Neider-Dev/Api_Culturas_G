"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const culturesController_1 = require("../controllers/culturesController");
class CulturesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", culturesController_1.culturesController.list);
        this.router.get("/:id", culturesController_1.culturesController.getOne);
    }
}
const culturesRoutes = new CulturesRoutes();
exports.default = culturesRoutes.router;
