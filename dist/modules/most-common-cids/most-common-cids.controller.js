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
exports.MostCommonCidsController = void 0;
const common_1 = require("@nestjs/common");
const most_common_cids_service_1 = require("./most-common-cids.service");
const swagger_1 = require("@nestjs/swagger");
let MostCommonCidsController = class MostCommonCidsController {
    constructor(mostCommonCidsService) {
        this.mostCommonCidsService = mostCommonCidsService;
    }
    async findAll() {
        return this.mostCommonCidsService.findAll();
    }
};
exports.MostCommonCidsController = MostCommonCidsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all most common cids' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns all most common cids' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No most common cids found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MostCommonCidsController.prototype, "findAll", null);
exports.MostCommonCidsController = MostCommonCidsController = __decorate([
    (0, common_1.Controller)('most-common-cids'),
    (0, swagger_1.ApiTags)('Most Common Cids'),
    __metadata("design:paramtypes", [most_common_cids_service_1.MostCommonCidsService])
], MostCommonCidsController);
//# sourceMappingURL=most-common-cids.controller.js.map