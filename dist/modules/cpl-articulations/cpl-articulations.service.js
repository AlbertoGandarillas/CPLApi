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
exports.CPLArticulationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CPLArticulationsService = class CPLArticulationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async searchArticulations(searchDto) {
        try {
            const where = {};
            const page = Number(searchDto.page) || 1;
            const limit = Number(searchDto.limit) || 20;
            if (searchDto.college) {
                where.CollegeID = parseInt(searchDto.college);
            }
            if (searchDto.cplType) {
                where.CPLType = parseInt(searchDto.cplType);
            }
            if (searchDto.learningMode) {
                where.ModelOfLearning = parseInt(searchDto.learningMode);
            }
            if (searchDto.criteria) {
                where.Criteria = searchDto.criteria;
            }
            if (searchDto.topCode) {
                where.TopCode = parseInt(searchDto.topCode);
            }
            if (searchDto.cidNumber) {
                where.CIDNumber = searchDto.cidNumber;
            }
            if (searchDto.searchTerm) {
                where.OR = [
                    { Subject: { contains: searchDto.searchTerm } },
                    { College: { contains: searchDto.searchTerm } },
                    { CourseNumber: { contains: searchDto.searchTerm } },
                    { CourseTitle: { contains: searchDto.searchTerm } },
                    { AceID: { contains: searchDto.searchTerm } },
                    { IndustryCertification: { contains: searchDto.searchTerm } },
                    { CPLTypeDescription: { contains: searchDto.searchTerm } },
                    { CPLModeofLearningDescription: { contains: searchDto.searchTerm } },
                    { Criteria: { contains: searchDto.searchTerm } },
                    { CIDNumber: { contains: searchDto.searchTerm } },
                    { CIDDescriptor: { contains: searchDto.searchTerm } },
                    { Program_Title: { contains: searchDto.searchTerm } },
                    { Course: { contains: searchDto.searchTerm } },
                ];
            }
            const [totalCount, articulations] = await Promise.all([
                this.prisma.viewCPLArticulations.count({ where }),
                this.prisma.viewCPLArticulations.findMany({
                    where,
                    orderBy: [
                        { College: 'asc' },
                        { Subject: 'asc' },
                        { CourseNumber: 'asc' },
                    ],
                    skip: (page - 1) * limit,
                    take: limit,
                }),
            ]);
            if (articulations.length === 0) {
                throw new common_1.NotFoundException('No articulations found');
            }
            return {
                data: articulations,
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
            throw error;
        }
    }
};
exports.CPLArticulationsService = CPLArticulationsService;
exports.CPLArticulationsService = CPLArticulationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CPLArticulationsService);
//# sourceMappingURL=cpl-articulations.service.js.map