import { CPLTypesService } from './cpl-types.service';
import { CPLType } from '@prisma/client';
export declare class CPLTypesController {
    private readonly cplTypesService;
    constructor(cplTypesService: CPLTypesService);
    findAll(): Promise<CPLType[]>;
}
