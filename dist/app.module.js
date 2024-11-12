"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
const cpl_types_module_1 = require("./modules/cpl-types/cpl-types.module");
const implemented_colleges_module_1 = require("./modules/implemented-colleges/implemented-colleges.module");
const colleges_module_1 = require("./modules/colleges/colleges.module");
const ui_settings_module_1 = require("./modules/ui-settings/ui-settings.module");
const potential_savings_module_1 = require("./modules/potential-savings/potential-savings.module");
const industry_certifications_module_1 = require("./modules/industry-certifications/industry-certifications.module");
const cpl_learning_modes_module_1 = require("./modules/cpl-learning-modes/cpl-learning-modes.module");
const email_module_1 = require("./modules/email/email.module");
const cpl_request_module_1 = require("./modules/cpl-request/cpl-request.module");
const cpl_courses_module_1 = require("./modules/cpl-courses/cpl-courses.module");
const cpl_inquiry_module_1 = require("./modules/cpl-inquiry/cpl-inquiry.module");
const send_cpl_request_module_1 = require("./modules/send-cpl-request/send-cpl-request.module");
const most_common_topcodes_module_1 = require("./modules/most-common-topcodes/most-common-topcodes.module");
const most_common_crs_module_1 = require("./modules/most-common-crs/most-common-crs.module");
const most_common_cids_module_1 = require("./modules/most-common-cids/most-common-cids.module");
const cpl_articulations_module_1 = require("./modules/cpl-articulations/cpl-articulations.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [cpl_types_module_1.CPLTypesModule, implemented_colleges_module_1.ImplementedCollegesModule, colleges_module_1.CollegesModule, ui_settings_module_1.UiSettingsModule, potential_savings_module_1.PotentialSavingsModule, industry_certifications_module_1.IndustryCertificationsModule, cpl_learning_modes_module_1.CPLLearningModesModule, email_module_1.EmailModule, cpl_request_module_1.CPLRequestModule, cpl_courses_module_1.CPLCoursesModule, cpl_inquiry_module_1.CPLInquiryModule, send_cpl_request_module_1.SendCPLRequestModule, most_common_topcodes_module_1.MostCommonTopcodesModule, most_common_crs_module_1.MostCommonCrsModule, most_common_cids_module_1.MostCommonCidsModule, cpl_articulations_module_1.CPLArticulationsModule],
        controllers: [],
        providers: [prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map