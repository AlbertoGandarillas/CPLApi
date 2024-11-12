"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MostCommonCidsModule = void 0;
const common_1 = require("@nestjs/common");
const most_common_cids_service_1 = require("./most-common-cids.service");
const most_common_cids_controller_1 = require("./most-common-cids.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
let MostCommonCidsModule = class MostCommonCidsModule {
};
exports.MostCommonCidsModule = MostCommonCidsModule;
exports.MostCommonCidsModule = MostCommonCidsModule = __decorate([
    (0, common_1.Module)({
        controllers: [most_common_cids_controller_1.MostCommonCidsController],
        providers: [most_common_cids_service_1.MostCommonCidsService, prisma_service_1.PrismaService],
        exports: [most_common_cids_service_1.MostCommonCidsService],
    })
], MostCommonCidsModule);
//# sourceMappingURL=most-common-cids.module.js.map