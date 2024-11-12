import { PrismaService } from '../../prisma/prisma.service';
export declare class ImplementedCollegesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        CollegeID: number;
        College: string | null;
    }[]>;
}
