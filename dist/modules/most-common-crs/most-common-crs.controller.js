"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MostCommonCrsController = void 0;
const common_1 = require("@nestjs/common");
const most_common_crs_service_1 = require("./most-common-crs.service");
const swagger_1 = require("@nestjs/swagger");
let MostCommonCrsController = class MostCommonCrsController {
    constructor(mostCommonCrsService) {
        this.mostCommonCrsService = mostCommonCrsService;
    }
    async findAll() {
        return this.mostCommonCrsService.findAll();
    }
};
exports.MostCommonCrsController = MostCommonCrsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all most common credit recommendations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns all most common credit recommendations' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No most common credit recommendations found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MostCommonCrsController.prototype, "findAll", null);
exports.MostCommonCrsController = MostCommonCrsController = __decorate([
    (0, common_1.Controller)('most-common-crs'),
    (0, swagger_1.ApiTags)('Most Common Crs'),
    __metadata("design:paramtypes", [most_common_crs_service_1.MostCommonCrsService])
], MostCommonCrsController);
//# sourceMappingURL=most-common-crs.controller.js.map