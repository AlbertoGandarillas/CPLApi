import * as nodemailer from 'nodemailer';
interface EmailAttachment {
    filename: string;
    content: Buffer | string;
    contentType?: string;
}
export interface EmailOptions extends Omit<nodemailer.SendMailOptions, 'attachments'> {
    attachments?: EmailAttachment[];
}
export declare class EmailService {
    private transporter;
    private readonly logger;
    constructor();
    sendEmail(options: EmailOptions): Promise<any>;
}
export {};
