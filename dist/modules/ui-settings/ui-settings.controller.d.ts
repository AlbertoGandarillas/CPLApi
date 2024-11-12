import { UISettingsService } from './ui-settings.service';
import { CollegeUIConfig } from '@prisma/client';
export declare class UISettingsController {
    private readonly uiSettingsService;
    constructor(uiSettingsService: UISettingsService);
    findBySlug(slug: string): Promise<CollegeUIConfig[]>;
}
