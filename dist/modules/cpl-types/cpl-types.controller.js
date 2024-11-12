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
exports.CPLTypesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cpl_types_service_1 = require("./cpl-types.service");
let CPLTypesController = class CPLTypesController {
    constructor(cplTypesService) {
        this.cplTypesService = cplTypesService;
    }
    async findAll() {
        return this.cplTypesService.findAll();
    }
};
exports.CPLTypesController = CPLTypesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all CPL types' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns all CPL types',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No CPL types found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CPLTypesController.prototype, "findAll", null);
exports.CPLTypesController = CPLTypesController = __decorate([
    (0, common_1.Controller)('cpl-types'),
    (0, swagger_1.ApiTags)('CPL Types'),
    __metadata("design:paramtypes", [cpl_types_service_1.CPLTypesService])
], CPLTypesController);
//# sourceMappingURL=cpl-types.controller.js.map