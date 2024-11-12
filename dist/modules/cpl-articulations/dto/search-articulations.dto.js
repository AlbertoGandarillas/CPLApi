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
exports.SearchArticulationsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class SearchArticulationsDto {
    constructor() {
        this.page = 1;
        this.limit = 20;
    }
}
exports.SearchArticulationsDto = SearchArticulationsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'College ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchArticulationsDto.prototype, "college", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'CPL type filter' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchArticulationsDto.prototype, "cplType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Learning mode filter' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchArticulationsDto.prototype, "learningMode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Criteria filter' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchArticulationsDto.prototype, "criteria", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'TOP code filter' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchArticulationsDto.prototype, "topCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'CID number filter' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchArticulationsDto.prototype, "cidNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Search term for text search' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchArticulationsDto.prototype, "searchTerm", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SearchArticulationsDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SearchArticulationsDto.prototype, "limit", void 0);
//# sourceMappingURL=search-articulations.dto.js.map