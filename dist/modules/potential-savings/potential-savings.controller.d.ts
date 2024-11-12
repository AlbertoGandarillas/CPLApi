import { PotentialSavingsService } from './potential-savings.service';
import { PotentialCPLSavings } from '@prisma/client';
export declare class PotentialSavingsController {
    private readonly potentialSavingsService;
    constructor(potentialSavingsService: PotentialSavingsService);
    getPotentialSavings(cplTypeParam?: string): Promise<PotentialCPLSavings[]>;
}
