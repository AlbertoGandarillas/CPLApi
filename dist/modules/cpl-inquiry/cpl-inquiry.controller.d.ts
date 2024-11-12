import { CPLInquiryService } from './cpl-inquiry.service';
import { CreateInquiryDto } from './dto/create-inquiry.dto';
export declare class CPLInquiryController {
    private readonly cplInquiryService;
    constructor(cplInquiryService: CPLInquiryService);
    create(createInquiryDto: CreateInquiryDto): Promise<{
        success: boolean;
        messageId: any;
    }>;
}
