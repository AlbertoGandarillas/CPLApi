declare class AttachmentDto {
    filename: string;
    content: string;
    contentType?: string;
}
export declare class SendEmailDto {
    from?: string;
    to: string | string[];
    subject: string;
    text?: string;
    html?: string;
    attachments?: AttachmentDto[];
}
export {};
