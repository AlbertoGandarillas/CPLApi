"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPLArticulationsModule = void 0;
const common_1 = require("@nestjs/common");
const cpl_articulations_service_1 = require("./cpl-articulations.service");
const cpl_articulations_controller_1 = require("./cpl-articulations.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
let CPLArticulationsModule = class CPLArticulationsModule {
};
exports.CPLArticulationsModule = CPLArticulationsModule;
exports.CPLArticulationsModule = CPLArticulationsModule = __decorate([
    (0, common_1.Module)({
        controllers: [cpl_articulations_controller_1.CPLArticulationsController],
        providers: [cpl_articulations_service_1.CPLArticulationsService, prisma_service_1.PrismaService],
        exports: [cpl_articulations_service_1.CPLArticulationsService],
    })
], CPLArticulationsModule);
//# sourceMappingURL=cpl-articulations.module.js.map