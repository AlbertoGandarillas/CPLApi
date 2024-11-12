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
var EmailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
let EmailService = EmailService_1 = class EmailService {
    constructor() {
        this.logger = new common_1.Logger(EmailService_1.name);
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || '465'),
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
            debug: true,
        });
    }
    async sendEmail(options) {
        try {
            if (!options.from) {
                options.from = process.env.EMAIL_FROM;
            }
            this.logger.log(`Attempting to send email to: ${options.to}`);
            this.logger.debug('Email options:', {
                from: options.from,
                to: options.to,
                subject: options.subject,
            });
            const info = await this.transporter.sendMail({
                ...options,
                attachments: options.attachments?.map((attachment) => ({
                    ...attachment,
                    content: typeof attachment.content === 'string'
                        ? Buffer.from(attachment.content, 'base64')
                        : attachment.content,
                })),
            });
            this.logger.log(`Email sent successfully. Message ID: ${info.messageId}`);
            return info;
        }
        catch (error) {
            this.logger.error('Failed to send email:', error);
            if (error instanceof Error) {
                this.logger.error('Error details:', {
                    name: error.name,
                    message: error.message,
                    stack: error.stack,
                });
            }
            throw new Error('Failed to send email. Please try again later.');
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = EmailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EmailService);
//# sourceMappingURL=email.service.js.map