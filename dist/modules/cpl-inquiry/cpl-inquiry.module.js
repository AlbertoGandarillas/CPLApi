"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPLInquiryModule = void 0;
const common_1 = require("@nestjs/common");
const cpl_inquiry_controller_1 = require("./cpl-inquiry.controller");
const cpl_inquiry_service_1 = require("./cpl-inquiry.service");
const email_module_1 = require("../email/email.module");
let CPLInquiryModule = class CPLInquiryModule {
};
exports.CPLInquiryModule = CPLInquiryModule;
exports.CPLInquiryModule = CPLInquiryModule = __decorate([
    (0, common_1.Module)({
        imports: [email_module_1.EmailModule],
        controllers: [cpl_inquiry_controller_1.CPLInquiryController],
        providers: [cpl_inquiry_service_1.CPLInquiryService,],
    })
], CPLInquiryModule);
//# sourceMappingURL=cpl-inquiry.module.js.map