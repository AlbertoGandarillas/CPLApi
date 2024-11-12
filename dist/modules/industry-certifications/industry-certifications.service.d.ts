import { PrismaService } from '../../prisma/prisma.service';
import { ViewCPLCommonQualifications } from '@prisma/client';
export declare class IndustryCertificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(collegeId?: string): Promise<ViewCPLCommonQualifications[]>;
}
