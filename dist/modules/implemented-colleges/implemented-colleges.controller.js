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
exports.ImplementedCollegesController = void 0;
const common_1 = require("@nestjs/common");
const implemented_colleges_service_1 = require("./implemented-colleges.service");
const swagger_1 = require("@nestjs/swagger");
let ImplementedCollegesController = class ImplementedCollegesController {
    constructor(implementedCollegesService) {
        this.implementedCollegesService = implementedCollegesService;
    }
    async findAll() {
        return this.implementedCollegesService.findAll();
    }
};
exports.ImplementedCollegesController = ImplementedCollegesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all implemented colleges' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns all Implemented Colleges',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No implemented colleges found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImplementedCollegesController.prototype, "findAll", null);
exports.ImplementedCollegesController = ImplementedCollegesController = __decorate([
    (0, common_1.Controller)('implemented-colleges'),
    (0, swagger_1.ApiTags)('Implemented Colleges'),
    __metadata("design:paramtypes", [implemented_colleges_service_1.ImplementedCollegesService])
], ImplementedCollegesController);
//# sourceMappingURL=implemented-colleges.controller.js.map