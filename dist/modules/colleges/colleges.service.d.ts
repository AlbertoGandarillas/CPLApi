import { PrismaService } from '../../prisma/prisma.service';
import { LookupColleges } from '@prisma/client';
export declare class CollegesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<LookupColleges[]>;
}
