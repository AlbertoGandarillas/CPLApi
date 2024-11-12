"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MostCommonCrsModule = void 0;
const common_1 = require("@nestjs/common");
const most_common_crs_service_1 = require("./most-common-crs.service");
const most_common_crs_controller_1 = require("./most-common-crs.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
let MostCommonCrsModule = class MostCommonCrsModule {
};
exports.MostCommonCrsModule = MostCommonCrsModule;
exports.MostCommonCrsModule = MostCommonCrsModule = __decorate([
    (0, common_1.Module)({
        controllers: [most_common_crs_controller_1.MostCommonCrsController],
        providers: [most_common_crs_service_1.MostCommonCrsService, prisma_service_1.PrismaService],
        exports: [most_common_crs_service_1.MostCommonCrsService],
    })
], MostCommonCrsModule);
//# sourceMappingURL=most-common-crs.module.js.map