import { PrismaService } from '../../prisma/prisma.service';
export declare class MostCommonTopcodesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        ID: number;
        TopCode: number | null;
        Program_Title: string | null;
        Count: number | null;
    }[]>;
}
