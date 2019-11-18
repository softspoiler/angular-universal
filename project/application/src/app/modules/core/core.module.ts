import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferHttpModule } from '@gorniv/ngx-transfer-http';

import { BotCrawlerService } from './services/bot-crawler/bot-crawler.service';
import { CookieService } from './services/cookie/cookie.service';
import { DocumentLinkService } from './services/document-link/document-link.service';
import { DocumentMetaService } from './services/document-meta/document-meta.service';
import { DocumentTitleService } from './services/document-title/document-title.service';
import { HttpRequestDataService } from './services/http-request-data/http-request-data.service';
import { HttpResponseStatusService } from './services/http-response-status/http-response-status.service';
import { SeoPropertiesService } from './services/seo-properties/seo-properties.service';
import { ServerAnimationService } from './services/server-animation/server-animation.service';
import { TransferStateService } from './services/transfer-state/transfer-state.service';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: 'example-web' }),
        BrowserTransferStateModule,
        TransferHttpModule,
    ],
    providers: [
        BotCrawlerService,
        CookieService,
        DocumentLinkService,
        DocumentMetaService,
        DocumentTitleService,
        HttpRequestDataService,
        HttpResponseStatusService,
        SeoPropertiesService,
        ServerAnimationService,
        TransferStateService,
    ],
})
export class CoreModule {}
