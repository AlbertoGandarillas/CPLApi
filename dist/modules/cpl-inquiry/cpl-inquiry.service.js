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
exports.CPLInquiryService = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("../email/email.service");
let CPLInquiryService = class CPLInquiryService {
    constructor(emailService) {
        this.emailService = emailService;
    }
    async createInquiry(inquiryDto) {
        const attachments = inquiryDto.files?.map((file) => ({
            filename: file.name,
            content: file.data.replace(/^data:.*?;base64,/, ''),
            contentType: 'application/octet-stream',
        }));
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: inquiryDto.CPLAssistantEmail,
            cc: inquiryDto.email,
            subject: 'New CPL Information Request',
            text: `
        Name: ${inquiryDto.firstName} ${inquiryDto.lastName}
        Email: ${inquiryDto.email}
        Message:
        ${inquiryDto.message}
      `,
            html: `
        <p>Name: ${inquiryDto.firstName} ${inquiryDto.lastName}</p>
        <p>Email: ${inquiryDto.email}</p>
        <p>Message:</p>
        <p>${inquiryDto.message}</p>
      `,
            attachments,
        };
        return await this.emailService.sendEmail(mailOptions);
    }
};
exports.CPLInquiryService = CPLInquiryService;
exports.CPLInquiryService = CPLInquiryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [email_service_1.EmailService])
], CPLInquiryService);
//# sourceMappingURL=cpl-inquiry.service.js.map