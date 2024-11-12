import { CollegesService } from './colleges.service';
import { LookupColleges } from '@prisma/client';
export declare class CollegesController {
    private readonly collegesService;
    constructor(collegesService: CollegesService);
    findAll(): Promise<LookupColleges[]>;
}
