import { PrismaService } from '../../prisma/prisma.service';
import { CPLModeofLearning } from '@prisma/client';
export declare class CPLLearningModesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<CPLModeofLearning[]>;
}
