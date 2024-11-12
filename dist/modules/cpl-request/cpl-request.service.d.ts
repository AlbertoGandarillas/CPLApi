import { PrismaService } from '../../prisma/prisma.service';
import { CPLRequest } from '@prisma/client';
import { UpdateCPLRequestDto } from './dto/update-cpl-request.dto';
import { CreateCPLRequestDto } from './dto/create-cpl-request.dto';
export declare class CPLRequestService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: CreateCPLRequestDto): Promise<CPLRequest>;
    findAll(): Promise<CPLRequest[]>;
    findOne(id: number): Promise<CPLRequest>;
    findByCollege(collegeId: number): Promise<CPLRequest[]>;
    update(id: number, updateDto: UpdateCPLRequestDto): Promise<CPLRequest>;
    remove(id: number): Promise<CPLRequest>;
}
