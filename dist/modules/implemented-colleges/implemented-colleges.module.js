"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImplementedCollegesModule = void 0;
const common_1 = require("@nestjs/common");
const implemented_colleges_service_1 = require("./implemented-colleges.service");
const implemented_colleges_controller_1 = require("./implemented-colleges.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
let ImplementedCollegesModule = class ImplementedCollegesModule {
};
exports.ImplementedCollegesModule = ImplementedCollegesModule;
exports.ImplementedCollegesModule = ImplementedCollegesModule = __decorate([
    (0, common_1.Module)({
        controllers: [implemented_colleges_controller_1.ImplementedCollegesController],
        providers: [implemented_colleges_service_1.ImplementedCollegesService, prisma_service_1.PrismaService],
        exports: [implemented_colleges_service_1.ImplementedCollegesService],
    })
], ImplementedCollegesModule);
//# sourceMappingURL=implemented-colleges.module.js.map