import { ImplementedCollegesService } from './implemented-colleges.service';
import { ViewCPLImplementedColleges } from '@prisma/client';
export declare class ImplementedCollegesController {
    private readonly implementedCollegesService;
    constructor(implementedCollegesService: ImplementedCollegesService);
    findAll(): Promise<ViewCPLImplementedColleges[]>;
}
