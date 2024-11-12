import { MostCommonCidsService } from './most-common-cids.service';
import { ViewCPLMostCommonCIDs } from '@prisma/client';
export declare class MostCommonCidsController {
    private readonly mostCommonCidsService;
    constructor(mostCommonCidsService: MostCommonCidsService);
    findAll(): Promise<ViewCPLMostCommonCIDs[]>;
}
