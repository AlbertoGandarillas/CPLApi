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
exports.SendEmailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class AttachmentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the file' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AttachmentDto.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'File content (base64 encoded string or Buffer)',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AttachmentDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'MIME type of the file' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AttachmentDto.prototype, "contentType", void 0);
class SendEmailDto {
}
exports.SendEmailDto = SendEmailDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Sender email address. If not provided, default EMAIL_FROM will be used',
        example: 'sender@example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SendEmailDto.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Recipient email address(es). Can be a single email or comma-separated list',
        example: 'recipient@example.com',
    }),
    (0, class_validator_1.IsEmail)({}, { each: true }),
    __metadata("design:type", Object)
], SendEmailDto.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email subject',
        example: 'Test Email Subject',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendEmailDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Plain text content of the email',
        example: 'This is a test email.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendEmailDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'HTML content of the email',
        example: '<h1>This is a test email.</h1>',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SendEmailDto.prototype, "html", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Array of attachments',
        type: [AttachmentDto],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AttachmentDto),
    __metadata("design:type", Array)
], SendEmailDto.prototype, "attachments", void 0);
//# sourceMappingURL=send-email.dto.js.map