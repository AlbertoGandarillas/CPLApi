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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPLArticulationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cpl_articulations_service_1 = require("./cpl-articulations.service");
const search_articulations_dto_1 = require("./dto/search-articulations.dto");
let CPLArticulationsController = class CPLArticulationsController {
    constructor(cplArticulationsService) {
        this.cplArticulationsService = cplArticulationsService;
    }
    async searchArticulations(searchDto) {
        return await this.cplArticulationsService.searchArticulations(searchDto);
    }
};
exports.CPLArticulationsController = CPLArticulationsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Search CPL articulations with filters' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns filtered CPL articulations',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No articulations found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_articulations_dto_1.SearchArticulationsDto]),
    __metadata("design:returntype", Promise)
], CPLArticulationsController.prototype, "searchArticulations", null);
exports.CPLArticulationsController = CPLArticulationsController = __decorate([
    (0, common_1.Controller)('cpl-articulations'),
    (0, swagger_1.ApiTags)('CPL Articulations'),
    __metadata("design:paramtypes", [cpl_articulations_service_1.CPLArticulationsService])
], CPLArticulationsController);
//# sourceMappingURL=cpl-articulations.controller.js.map