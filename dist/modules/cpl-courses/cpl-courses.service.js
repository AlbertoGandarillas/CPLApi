"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPLCoursesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CPLCoursesService = class CPLCoursesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async searchCourses(searchDto) {
        try {
            const where = {};
            const page = Number(searchDto.page) || 1;
            const limit = Number(searchDto.limit) || 20;
            if (searchDto.college) {
                where.CollegeID = parseInt(searchDto.college);
            }
            if (searchDto.outlineIds) {
                where.OutlineID = {
                    in: searchDto.outlineIds.split(',').map((id) => parseInt(id)),
                };
                const selectedCourses = await this.prisma.viewCPLCourses.findMany({
                    where,
                    include: {
                        IndustryCertifications: {
                            include: {
                                Evidences: true,
                                CreditRecommendations: true,
                            },
                        },
                    },
                    orderBy: [{ Subject: 'asc' }, { CourseNumber: 'asc' }],
                });
                return {
                    data: selectedCourses,
                    metadata: {
                        totalCount: selectedCourses.length,
                        currentPage: 1,
                        pageSize: selectedCourses.length,
                        totalPages: 1,
                        hasMore: false,
                    },
                };
            }
            if (searchDto.industryCertification ||
                searchDto.cplType ||
                searchDto.learningMode) {
                where.IndustryCertifications = {
                    some: {
                        ...(searchDto.industryCertification && {
                            IndustryCertification: {
                                contains: searchDto.industryCertification,
                            },
                        }),
                        ...(searchDto.cplType && {
                            CPLType: { equals: parseInt(searchDto.cplType) },
                        }),
                        ...(searchDto.learningMode && {
                            ModelOfLearning: { equals: parseInt(searchDto.learningMode) },
                        }),
                    },
                };
            }
            if (searchDto.searchTerm) {
                where.OR = [
                    { Course: { contains: searchDto.searchTerm } },
                    { Subject: { contains: searchDto.searchTerm } },
                    { College: { contains: searchDto.searchTerm } },
                    { CourseTitle: { contains: searchDto.searchTerm } },
                    {
                        IndustryCertifications: {
                            some: {
                                OR: [
                                    { IndustryCertification: { contains: searchDto.searchTerm } },
                                    { CPLTypeDescription: { contains: searchDto.searchTerm } },
                                    {
                                        CPLModeofLearningDescription: {
                                            contains: searchDto.searchTerm,
                                        },
                                    },
                                ],
                            },
                        },
                    },
                ];
            }
            const [totalCount, courses] = await Promise.all([
                this.prisma.viewCPLCourses.count({ where }),
                this.prisma.viewCPLCourses.findMany({
                    where,
                    include: {
                        IndustryCertifications: {
                            include: {
                                Evidences: true,
                                CreditRecommendations: true,
                            },
                        },
                    },
                    orderBy: [{ Subject: 'asc' }, { CourseNumber: 'asc' }],
                    skip: (page - 1) * limit,
                    take: limit,
                }),
            ]);
            if (courses.length === 0) {
                throw new common_1.NotFoundException('No articulations found');
            }
            return {
                data: courses,
                metadata: {
                    totalCount,
                    currentPage: page,
                    pageSize: limit,
                    totalPages: Math.ceil(totalCount / limit),
                    hasMore: page * limit < totalCount,
                },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            if (error.message?.includes('maximum of 2100 parameters')) {
                throw new common_1.BadRequestException('The result of your search is too large. Please adjust your search criteria to narrow down the results.');
            }
            throw error;
        }
    }
};
exports.CPLCoursesService = CPLCoursesService;
exports.CPLCoursesService = CPLCoursesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CPLCoursesService);
//# sourceMappingURL=cpl-courses.service.js.map