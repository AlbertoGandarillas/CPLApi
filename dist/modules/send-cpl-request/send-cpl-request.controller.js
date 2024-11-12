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
exports.SendCPLRequestController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const send_cpl_request_service_1 = require("./send-cpl-request.service");
const send_cpl_request_dto_1 = require("./dto/send-cpl-request.dto");
let SendCPLRequestController = class SendCPLRequestController {
    constructor(sendCPLRequestService) {
        this.sendCPLRequestService = sendCPLRequestService;
    }
    async create(sendCPLRequestDto) {
        const info = await this.sendCPLRequestService.sendRequest(sendCPLRequestDto);
        return {
            success: true,
            messageId: info.messageId,
        };
    }
};
exports.SendCPLRequestController = SendCPLRequestController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Send a CPL request email' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'CPL request email sent successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Failed to send email' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_cpl_request_dto_1.SendCPLRequestDto]),
    __metadata("design:returntype", Promise)
], SendCPLRequestController.prototype, "create", null);
exports.SendCPLRequestController = SendCPLRequestController = __decorate([
    (0, common_1.Controller)('send-cpl-request'),
    (0, swagger_1.ApiTags)('CPL Request'),
    __metadata("design:paramtypes", [send_cpl_request_service_1.SendCPLRequestService])
], SendCPLRequestController);
//# sourceMappingURL=send-cpl-request.controller.js.map