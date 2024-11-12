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
exports.CreateCPLRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCPLRequestDto {
}
exports.CreateCPLRequestDto = CreateCPLRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'First name of the requester' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCPLRequestDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'Last name of the requester' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCPLRequestDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'john.doe@example.com',
        description: 'Email address',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateCPLRequestDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Whether the user has a CCC Apply ID',
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateCPLRequestDto.prototype, "hasCCCApplyId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '12345',
        description: 'CCC Apply ID if available',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCPLRequestDto.prototype, "cccApplyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '["Course1", "Course2"]',
        description: 'JSON string of selected courses',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCPLRequestDto.prototype, "selectedCourses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'College ID' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCPLRequestDto.prototype, "CollegeID", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Additional qualifications',
        description: 'Any unlisted qualifications',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCPLRequestDto.prototype, "unlistedQualifications", void 0);
//# sourceMappingURL=create-cpl-request.dto.js.map