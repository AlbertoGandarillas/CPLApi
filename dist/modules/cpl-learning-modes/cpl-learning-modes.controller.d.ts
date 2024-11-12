import { CPLLearningModesService } from './cpl-learning-modes.service';
import { CPLModeofLearning } from '@prisma/client';
export declare class CPLLearningModesController {
    private readonly cplLearningModesService;
    constructor(cplLearningModesService: CPLLearningModesService);
    findAll(): Promise<CPLModeofLearning[]>;
}
