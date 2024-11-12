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
exports.UISettingsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ui_settings_service_1 = require("./ui-settings.service");
let UISettingsController = class UISettingsController {
    constructor(uiSettingsService) {
        this.uiSettingsService = uiSettingsService;
    }
    async findBySlug(slug) {
        try {
            return await this.uiSettingsService.findBySlug(slug);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw error;
        }
    }
};
exports.UISettingsController = UISettingsController;
__decorate([
    (0, common_1.Get)(':slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get UI settings by slug' }),
    (0, swagger_1.ApiParam)({ name: 'slug', description: 'College UI settings slug' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns UI settings for college' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'UI settings not found' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UISettingsController.prototype, "findBySlug", null);
exports.UISettingsController = UISettingsController = __decorate([
    (0, common_1.Controller)('ui-settings'),
    (0, swagger_1.ApiTags)('UI Settings'),
    __metadata("design:paramtypes", [ui_settings_service_1.UISettingsService])
], UISettingsController);
//# sourceMappingURL=ui-settings.controller.js.map