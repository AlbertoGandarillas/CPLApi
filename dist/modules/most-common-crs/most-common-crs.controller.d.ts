import { MostCommonCrsService } from './most-common-crs.service';
import { ViewCPLMostCommonCreditRecommendations } from '@prisma/client';
export declare class MostCommonCrsController {
    private readonly mostCommonCrsService;
    constructor(mostCommonCrsService: MostCommonCrsService);
    findAll(): Promise<ViewCPLMostCommonCreditRecommendations[]>;
}
