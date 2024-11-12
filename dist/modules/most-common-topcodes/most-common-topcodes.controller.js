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
exports.MostCommonTopcodesController = void 0;
const common_1 = require("@nestjs/common");
const most_common_topcodes_service_1 = require("./most-common-topcodes.service");
const swagger_1 = require("@nestjs/swagger");
let MostCommonTopcodesController = class MostCommonTopcodesController {
    constructor(mostCommonTopcodesService) {
        this.mostCommonTopcodesService = mostCommonTopcodesService;
    }
    async findAll() {
        return this.mostCommonTopcodesService.findAll();
    }
};
exports.MostCommonTopcodesController = MostCommonTopcodesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all most common topcodes' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns all most common topcodes' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No most common topcodes found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MostCommonTopcodesController.prototype, "findAll", null);
exports.MostCommonTopcodesController = MostCommonTopcodesController = __decorate([
    (0, common_1.Controller)('most-common-topcodes'),
    (0, swagger_1.ApiTags)('Most Common Topcodes'),
    __metadata("design:paramtypes", [most_common_topcodes_service_1.MostCommonTopcodesService])
], MostCommonTopcodesController);
//# sourceMappingURL=most-common-topcodes.controller.js.map