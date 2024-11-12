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
exports.PotentialSavingsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const potential_savings_service_1 = require("./potential-savings.service");
let PotentialSavingsController = class PotentialSavingsController {
    constructor(potentialSavingsService) {
        this.potentialSavingsService = potentialSavingsService;
    }
    async getPotentialSavings(cplTypeParam) {
        try {
            let cplType = null;
            if (cplTypeParam !== undefined) {
                cplType = parseInt(cplTypeParam, 10);
                if (isNaN(cplType)) {
                    throw new common_1.BadRequestException('Invalid cpltype parameter');
                }
            }
            return await this.potentialSavingsService.getPotentialCPLSavings(cplType);
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw error;
        }
    }
};
exports.PotentialSavingsController = PotentialSavingsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get potential CPL savings' }),
    (0, swagger_1.ApiQuery)({
        name: 'cpltype',
        required: false,
        type: Number,
        description: 'CPL type filter',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns potential savings data' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid cpltype parameter' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No data found' }),
    __param(0, (0, common_1.Query)('cpltype')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PotentialSavingsController.prototype, "getPotentialSavings", null);
exports.PotentialSavingsController = PotentialSavingsController = __decorate([
    (0, common_1.Controller)('potential-savings'),
    (0, swagger_1.ApiTags)('Potential Savings'),
    __metadata("design:paramtypes", [potential_savings_service_1.PotentialSavingsService])
], PotentialSavingsController);
//# sourceMappingURL=potential-savings.controller.js.map