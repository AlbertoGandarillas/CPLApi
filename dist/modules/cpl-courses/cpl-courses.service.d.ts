import { PrismaService } from '../../prisma/prisma.service';
import { SearchCoursesDto } from './dto/search-courses.dto';
export declare class CPLCoursesService {
    private prisma;
    constructor(prisma: PrismaService);
    searchCourses(searchDto: SearchCoursesDto): Promise<{
        data: ({
            IndustryCertifications: ({
                Evidences: {
                    IndustryCertification: string;
                    OutlineID: number;
                    EvidenCompetency: string;
                }[];
                CreditRecommendations: {
                    IndustryCertification: string;
                    OutlineID: number;
                    Criteria: string;
                }[];
            } & {
                CPLTypeDescription: string | null;
                CPLType: number | null;
                IndustryCertification: string;
                CPLModeofLearningDescription: string | null;
                OutlineID: number;
                ModelOfLearning: number | null;
            })[];
        } & {
            CollegeID: number;
            College: string | null;
            Units: string | null;
            OutlineID: number;
            Subject: string | null;
            CourseNumber: string | null;
            CourseTitle: string | null;
            Course: string | null;
            Catalog: string | null;
        })[];
        metadata: {
            totalCount: number;
            currentPage: number;
            pageSize: number;
            totalPages: number;
            hasMore: boolean;
        };
    }>;
}
