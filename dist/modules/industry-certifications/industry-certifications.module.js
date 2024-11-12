"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustryCertificationsModule = void 0;
const common_1 = require("@nestjs/common");
const industry_certifications_service_1 = require("./industry-certifications.service");
const industry_certifications_controller_1 = require("./industry-certifications.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
let IndustryCertificationsModule = class IndustryCertificationsModule {
};
exports.IndustryCertificationsModule = IndustryCertificationsModule;
exports.IndustryCertificationsModule = IndustryCertificationsModule = __decorate([
    (0, common_1.Module)({
        exports: [industry_certifications_service_1.IndustryCertificationsService],
        controllers: [industry_certifications_controller_1.IndustryCertificationsController],
        providers: [industry_certifications_service_1.IndustryCertificationsService, prisma_service_1.PrismaService],
    })
], IndustryCertificationsModule);
//# sourceMappingURL=industry-certifications.module.js.map