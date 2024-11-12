declare class FileAttachmentDto {
    name: string;
    data: string;
}
export declare class CreateInquiryDto {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    CPLAssistantEmail: string;
    files?: FileAttachmentDto[];
}
export {};
