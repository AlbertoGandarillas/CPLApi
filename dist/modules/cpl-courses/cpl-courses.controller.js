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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPLCoursesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cpl_courses_service_1 = require("./cpl-courses.service");
const search_courses_dto_1 = require("./dto/search-courses.dto");
let CPLCoursesController = class CPLCoursesController {
    constructor(cplCoursesService) {
        this.cplCoursesService = cplCoursesService;
    }
    async searchCourses(searchDto) {
        return await this.cplCoursesService.searchCourses(searchDto);
    }
};
exports.CPLCoursesController = CPLCoursesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Search CPL courses with filters' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns filtered CPL courses' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No articulations found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_courses_dto_1.SearchCoursesDto]),
    __metadata("design:returntype", Promise)
], CPLCoursesController.prototype, "searchCourses", null);
exports.CPLCoursesController = CPLCoursesController = __decorate([
    (0, common_1.Controller)('cpl-courses'),
    (0, swagger_1.ApiTags)('CPL Courses'),
    __metadata("design:paramtypes", [cpl_courses_service_1.CPLCoursesService])
], CPLCoursesController);
//# sourceMappingURL=cpl-courses.controller.js.map