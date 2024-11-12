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
exports.CPLInquiryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cpl_inquiry_service_1 = require("./cpl-inquiry.service");
const create_inquiry_dto_1 = require("./dto/create-inquiry.dto");
let CPLInquiryController = class CPLInquiryController {
    constructor(cplInquiryService) {
        this.cplInquiryService = cplInquiryService;
    }
    async create(createInquiryDto) {
        const info = await this.cplInquiryService.createInquiry(createInquiryDto);
        return {
            success: true,
            messageId: info.messageId,
        };
    }
};
exports.CPLInquiryController = CPLInquiryController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new CPL inquiry' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Inquiry created and email sent successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Failed to send email' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inquiry_dto_1.CreateInquiryDto]),
    __metadata("design:returntype", Promise)
], CPLInquiryController.prototype, "create", null);
exports.CPLInquiryController = CPLInquiryController = __decorate([
    (0, common_1.Controller)('cpl-inquiry'),
    (0, swagger_1.ApiTags)('CPL Inquiries'),
    __metadata("design:paramtypes", [cpl_inquiry_service_1.CPLInquiryService])
], CPLInquiryController);
//# sourceMappingURL=cpl-inquiry.controller.js.map