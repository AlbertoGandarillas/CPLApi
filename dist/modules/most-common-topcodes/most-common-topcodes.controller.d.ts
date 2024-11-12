import { MostCommonTopcodesService } from './most-common-topcodes.service';
import { ViewCPLMostCommonTopCodes } from '@prisma/client';
export declare class MostCommonTopcodesController {
    private readonly mostCommonTopcodesService;
    constructor(mostCommonTopcodesService: MostCommonTopcodesService);
    findAll(): Promise<ViewCPLMostCommonTopCodes[]>;
}
