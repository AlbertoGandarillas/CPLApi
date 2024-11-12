import { EmailService } from '../email/email.service';
import { CreateInquiryDto } from './dto/create-inquiry.dto';
export declare class CPLInquiryService {
    private readonly emailService;
    constructor(emailService: EmailService);
    createInquiry(inquiryDto: CreateInquiryDto): Promise<any>;
}
