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
exports.IndustryCertificationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const industry_certifications_service_1 = require("./industry-certifications.service");
let IndustryCertificationsController = class IndustryCertificationsController {
    constructor(industryCertificationsService) {
        this.industryCertificationsService = industryCertificationsService;
    }
    async findAll(collegeId) {
        try {
            return await this.industryCertificationsService.findAll(collegeId);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw error;
        }
    }
};
exports.IndustryCertificationsController = IndustryCertificationsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get industry certifications' }),
    (0, swagger_1.ApiQuery)({
        name: 'collegeId',
        required: false,
        type: String,
        description: 'College ID filter',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns industry certifications',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No industry certifications found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __param(0, (0, common_1.Query)('collegeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IndustryCertificationsController.prototype, "findAll", null);
exports.IndustryCertificationsController = IndustryCertificationsController = __decorate([
    (0, common_1.Controller)('industry-certifications'),
    (0, swagger_1.ApiTags)('Industry Certifications'),
    __metadata("design:paramtypes", [industry_certifications_service_1.IndustryCertificationsService])
], IndustryCertificationsController);
//# sourceMappingURL=industry-certifications.controller.js.map