import { PrismaService } from 'src/prisma/prisma.service';
export declare class MostCommonCrsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        ID: number;
        Criteria: string | null;
        Count: number | null;
    }[]>;
}
