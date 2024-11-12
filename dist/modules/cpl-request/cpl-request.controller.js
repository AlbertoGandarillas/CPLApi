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
exports.CPLRequestController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cpl_request_service_1 = require("./cpl-request.service");
const create_cpl_request_dto_1 = require("./dto/create-cpl-request.dto");
const update_cpl_request_dto_1 = require("./dto/update-cpl-request.dto");
let CPLRequestController = class CPLRequestController {
    constructor(cplRequestService) {
        this.cplRequestService = cplRequestService;
    }
    async create(createDto) {
        return await this.cplRequestService.create(createDto);
    }
    async findAll() {
        return await this.cplRequestService.findAll();
    }
    async findByCollege(collegeId) {
        return await this.cplRequestService.findByCollege(collegeId);
    }
    async findOne(id) {
        return await this.cplRequestService.findOne(id);
    }
    async update(id, updateDto) {
        return await this.cplRequestService.update(id, updateDto);
    }
    async remove(id) {
        return await this.cplRequestService.remove(id);
    }
};
exports.CPLRequestController = CPLRequestController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new CPL request' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Request created successfully',
        type: create_cpl_request_dto_1.CreateCPLRequestDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cpl_request_dto_1.CreateCPLRequestDto]),
    __metadata("design:returntype", Promise)
], CPLRequestController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all CPL requests' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns all CPL requests' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CPLRequestController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('college/:collegeId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get CPL requests by college' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns CPL requests for college' }),
    __param(0, (0, common_1.Param)('collegeId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CPLRequestController.prototype, "findByCollege", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a CPL request by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns a CPL request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Request not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CPLRequestController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a CPL request' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Request updated successfully',
        type: update_cpl_request_dto_1.UpdateCPLRequestDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Request not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_cpl_request_dto_1.UpdateCPLRequestDto]),
    __metadata("design:returntype", Promise)
], CPLRequestController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a CPL request' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Request deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Request not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CPLRequestController.prototype, "remove", null);
exports.CPLRequestController = CPLRequestController = __decorate([
    (0, common_1.Controller)('cpl-request'),
    (0, swagger_1.ApiTags)('CPL Requests'),
    __metadata("design:paramtypes", [cpl_request_service_1.CPLRequestService])
], CPLRequestController);
//# sourceMappingURL=cpl-request.controller.js.map