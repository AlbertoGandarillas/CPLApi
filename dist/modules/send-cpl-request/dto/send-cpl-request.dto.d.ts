declare class FileAttachmentDto {
    name: string;
    data: string;
}
declare class CourseWithCertificationsDto {
    course: string;
    certifications: string[];
}
export declare class SendCPLRequestDto {
    firstName: string;
    lastName: string;
    email: string;
    CPLAssistantEmail: string;
    selectedCourses: CourseWithCertificationsDto[];
    cccApplyId?: string;
    unlistedQualifications?: string;
    files?: FileAttachmentDto[];
}
export {};
