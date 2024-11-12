import { SendCPLRequestService } from './send-cpl-request.service';
import { SendCPLRequestDto } from './dto/send-cpl-request.dto';
export declare class SendCPLRequestController {
    private readonly sendCPLRequestService;
    constructor(sendCPLRequestService: SendCPLRequestService);
    create(sendCPLRequestDto: SendCPLRequestDto): Promise<{
        success: boolean;
        messageId: any;
    }>;
}
