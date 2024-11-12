import { PrismaService } from '../../prisma/prisma.service';
export declare class CPLTypesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        ID: number;
        CPLTypeDescription: string | null;
        CreatedBy: number | null;
        CreatedOn: Date | null;
        Active: boolean | null;
        SortOrder: number | null;
        CPLTypeCode: string | null;
    }[]>;
}
