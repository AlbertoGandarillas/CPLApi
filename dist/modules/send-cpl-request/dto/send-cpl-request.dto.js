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
exports.SendCPLRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class FileAttachmentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'File name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FileAttachmentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Base64 encoded file data' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FileAttachmentDto.prototype, "data", void 0);
class CourseWithCertificationsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Course name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CourseWithCertificationsDto.prototype, "course", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of certifications', type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CourseWithCertificationsDto.prototype, "certifications", void 0);
class SendCPLRequestDto {
}
exports.SendCPLRequestDto = SendCPLRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendCPLRequestDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendCPLRequestDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john.doe@example.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SendCPLRequestDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cpl.assistant@college.edu' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SendCPLRequestDto.prototype, "CPLAssistantEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CourseWithCertificationsDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CourseWithCertificationsDto),
    __metadata("design:type", Array)
], SendCPLRequestDto.prototype, "selectedCourses", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendCPLRequestDto.prototype, "cccApplyId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendCPLRequestDto.prototype, "unlistedQualifications", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileAttachmentDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileAttachmentDto),
    __metadata("design:type", Array)
], SendCPLRequestDto.prototype, "files", void 0);
//# sourceMappingURL=send-cpl-request.dto.js.map