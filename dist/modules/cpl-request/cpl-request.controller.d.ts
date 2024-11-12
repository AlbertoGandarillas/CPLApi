import { CPLRequestService } from './cpl-request.service';
import { CPLRequest } from '@prisma/client';
import { CreateCPLRequestDto } from './dto/create-cpl-request.dto';
import { UpdateCPLRequestDto } from './dto/update-cpl-request.dto';
export declare class CPLRequestController {
    private readonly cplRequestService;
    constructor(cplRequestService: CPLRequestService);
    create(createDto: CreateCPLRequestDto): Promise<CPLRequest>;
    findAll(): Promise<CPLRequest[]>;
    findByCollege(collegeId: number): Promise<CPLRequest[]>;
    findOne(id: number): Promise<CPLRequest>;
    update(id: number, updateDto: UpdateCPLRequestDto): Promise<CPLRequest>;
    remove(id: number): Promise<CPLRequest>;
}
