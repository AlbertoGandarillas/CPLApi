"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiSettingsModule = void 0;
const common_1 = require("@nestjs/common");
const ui_settings_service_1 = require("./ui-settings.service");
const ui_settings_controller_1 = require("./ui-settings.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
let UiSettingsModule = class UiSettingsModule {
};
exports.UiSettingsModule = UiSettingsModule;
exports.UiSettingsModule = UiSettingsModule = __decorate([
    (0, common_1.Module)({
        exports: [ui_settings_service_1.UISettingsService],
        controllers: [ui_settings_controller_1.UISettingsController],
        providers: [ui_settings_service_1.UISettingsService, prisma_service_1.PrismaService],
    })
], UiSettingsModule);
//# sourceMappingURL=ui-settings.module.js.map