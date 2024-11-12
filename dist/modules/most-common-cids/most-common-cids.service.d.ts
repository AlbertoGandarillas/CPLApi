import { PrismaService } from 'src/prisma/prisma.service';
export declare class MostCommonCidsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        ID: number;
        Count: number | null;
        CIDNumber: string | null;
        CIDDescriptor: string | null;
    }[]>;
}
