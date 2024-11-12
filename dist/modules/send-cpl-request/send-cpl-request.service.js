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
exports.SendCPLRequestService = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("../email/email.service");
let SendCPLRequestService = class SendCPLRequestService {
    constructor(emailService) {
        this.emailService = emailService;
    }
    async sendRequest(requestDto) {
        const attachments = requestDto.files?.map((file) => ({
            filename: file.name,
            content: file.data.replace(/^data:.*?;base64,/, ''),
            encoding: 'base64',
        }));
        const coursesHtml = requestDto.selectedCourses
            .map(({ course, certifications }) => `
      <li>
        ${course}
        ${certifications.length > 0
            ? `
          <ul>
            ${certifications.map((cert) => `<li>${cert}</li>`).join('')}
          </ul>
        `
            : ''}
      </li>
    `)
            .join('');
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: requestDto.CPLAssistantEmail,
            cc: requestDto.email,
            subject: 'New CPL Information Request',
            text: `
        Name: ${requestDto.firstName} ${requestDto.lastName}
        Email: ${requestDto.email}
        CCC Apply ID: ${requestDto.cccApplyId || 'None provided'}
        Selected Courses:
        ${requestDto.selectedCourses.map((c) => c.course).join('\n')}
        Unlisted Qualifications:
        ${requestDto.unlistedQualifications || 'None provided'}
      `,
            html: `
        <p>Hello,</p>
        <p>My name is ${requestDto.firstName} ${requestDto.lastName}${requestDto.cccApplyId
                ? `, and I have a CCCApply ID: ${requestDto.cccApplyId}`
                : ''}. I am interested in receiving a CPL review for the following courses:</p>
        <ul>
          ${coursesHtml}
        </ul>
        ${requestDto.unlistedQualifications
                ? `
          <p>Additionally, I have the following unlisted qualifications:</p>
          <p>${requestDto.unlistedQualifications}</p>
        `
                : ''}
        ${attachments?.length > 0
                ? `<p>I have attached the evidence I have available and look forward to hearing from you soon!</p>`
                : ''}    
        <p>Thanks,</p>
        <p>${requestDto.firstName} ${requestDto.lastName}</p>
        <p>${requestDto.email}</p>
      `,
            attachments,
        };
        return await this.emailService.sendEmail(mailOptions);
    }
};
exports.SendCPLRequestService = SendCPLRequestService;
exports.SendCPLRequestService = SendCPLRequestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [email_service_1.EmailService])
], SendCPLRequestService);
//# sourceMappingURL=send-cpl-request.service.js.map