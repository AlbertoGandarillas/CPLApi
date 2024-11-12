import { IndustryCertificationsService } from './industry-certifications.service';
import { ViewCPLCommonQualifications } from '@prisma/client';
export declare class IndustryCertificationsController {
    private readonly industryCertificationsService;
    constructor(industryCertificationsService: IndustryCertificationsService);
    findAll(collegeId?: string): Promise<ViewCPLCommonQualifications[]>;
}
