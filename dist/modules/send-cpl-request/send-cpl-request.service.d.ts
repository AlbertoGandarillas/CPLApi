import { EmailService } from '../email/email.service';
import { SendCPLRequestDto } from './dto/send-cpl-request.dto';
export declare class SendCPLRequestService {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendRequest(requestDto: SendCPLRequestDto): Promise<any>;
}
