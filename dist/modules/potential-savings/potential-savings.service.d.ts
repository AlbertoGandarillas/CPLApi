import { PrismaService } from '../../prisma/prisma.service';
import { PotentialCPLSavings } from '@prisma/client';
export declare class PotentialSavingsService {
    private prisma;
    constructor(prisma: PrismaService);
    getPotentialCPLSavings(cplType: number | null): Promise<PotentialCPLSavings[]>;
}
