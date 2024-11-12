import { CPLArticulationsService } from './cpl-articulations.service';
import { SearchArticulationsDto } from './dto/search-articulations.dto';
export declare class CPLArticulationsController {
    private readonly cplArticulationsService;
    constructor(cplArticulationsService: CPLArticulationsService);
    searchArticulations(searchDto: SearchArticulationsDto): Promise<{
        data: {
            CPLTypeDescription: string | null;
            CPLType: number | null;
            CollegeID: number;
            College: string | null;
            Students: number | null;
            Units: string | null;
            IndustryCertification: string | null;
            CPLModeofLearningDescription: string | null;
            OutlineID: number;
            Subject: string | null;
            CourseNumber: string | null;
            CourseTitle: string | null;
            Course: string | null;
            ModelOfLearning: number | null;
            Criteria: string | null;
            TopCode: number | null;
            Program_Title: string | null;
            CIDNumber: string | null;
            CIDDescriptor: string | null;
            AceID: string | null;
            ArticulationID: number;
            ExhibitID: number;
            TeamRevd: Date | null;
            VersionNumber: string | null;
            CriteriaID: number | null;
            IssuedFormID: number | null;
            CRUnits: import("@prisma/client/runtime/library").Decimal | null;
        }[];
        metadata: {
            totalCount: number;
            currentPage: number;
            pageSize: number;
            totalPages: number;
            hasMore: boolean;
        };
    }>;
}
