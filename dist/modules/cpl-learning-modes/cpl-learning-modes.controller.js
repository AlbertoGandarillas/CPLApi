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
exports.CPLLearningModesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cpl_learning_modes_service_1 = require("./cpl-learning-modes.service");
let CPLLearningModesController = class CPLLearningModesController {
    constructor(cplLearningModesService) {
        this.cplLearningModesService = cplLearningModesService;
    }
    async findAll() {
        try {
            return await this.cplLearningModesService.findAll();
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw error;
        }
    }
};
exports.CPLLearningModesController = CPLLearningModesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all CPL learning modes' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns all CPL learning modes',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No Learning Modes found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CPLLearningModesController.prototype, "findAll", null);
exports.CPLLearningModesController = CPLLearningModesController = __decorate([
    (0, common_1.Controller)('cpl-learning-modes'),
    (0, swagger_1.ApiTags)('CPL Learning Modes'),
    __metadata("design:paramtypes", [cpl_learning_modes_service_1.CPLLearningModesService])
], CPLLearningModesController);
//# sourceMappingURL=cpl-learning-modes.controller.js.map