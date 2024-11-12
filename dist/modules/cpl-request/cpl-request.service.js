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
exports.CPLRequestService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("@prisma/client");
let CPLRequestService = class CPLRequestService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDto) {
        try {
            return await this.prisma.cPLRequest.create({
                data: {
                    ...createDto,
                    selectedCourses: JSON.stringify(createDto.selectedCourses),
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create CPL request');
        }
    }
    async findAll() {
        return await this.prisma.cPLRequest.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const request = await this.prisma.cPLRequest.findUnique({
            where: { id: id },
        });
        if (!request) {
            throw new common_1.NotFoundException(`CPL request with ID ${id} not found`);
        }
        return request;
    }
    async findByCollege(collegeId) {
        return await this.prisma.cPLRequest.findMany({
            where: { CollegeID: collegeId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async update(id, updateDto) {
        try {
            return await this.prisma.cPLRequest.update({
                where: { id: id },
                data: updateDto,
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`CPL request with ID ${id} not found`);
                }
            }
            throw new common_1.BadRequestException('Failed to update CPL request');
        }
    }
    async remove(id) {
        try {
            return await this.prisma.cPLRequest.delete({
                where: { id: id },
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new common_1.NotFoundException(`CPL request with ID ${id} not found`);
                }
            }
            throw new common_1.BadRequestException('Failed to delete CPL request');
        }
    }
};
exports.CPLRequestService = CPLRequestService;
exports.CPLRequestService = CPLRequestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CPLRequestService);
//# sourceMappingURL=cpl-request.service.js.map