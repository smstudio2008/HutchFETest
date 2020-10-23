import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../../../shared/shared.module';

import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminRoutingModule } from './routes/admin.routing.module';



import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './store/effects/user.effects';
import { userReducer } from './store/reducer/user.reducer';


import { AdsViewComponent } from './components/ads-view/ads-view.component';
import { DailyGiftComponent } from './components/daily-gift/daily-gift.component';
import { FtueProgressComponent } from './components/ftue-progress/ftue-progress.component';
import { FuelViewComponent } from './components/fuel-view/fuel-view.component';
import { FusionCreditsComponent } from './components/fusion-credits/fusion-credits.component';
import { LogEntriesComponent } from './components/log-entries/log-entries.component';
import { SocialAccountsComponent } from './components/social-accounts/social-accounts.component';
import { UserArgumentsComponent } from './components/user-arguments/user-arguments.component';
import { UserCarsComponent } from './components/user-cars/user-cars.component';
import { UserIapReceiptsComponent } from './components/user-iap-receipts/user-iap-receipts.component';
import { UserOfferReceiptsComponent } from './components/user-offer-receipts/user-offer-receipts.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserResourcesComponent } from './components/user-resources/user-resources.component';
import { UserTiersComponent } from './components/user-tiers/user-tiers.component';

@NgModule({
    declarations: [
        AdminPageComponent,
        AdsViewComponent,
        DailyGiftComponent,
        FtueProgressComponent,
        FuelViewComponent,
        FusionCreditsComponent,
        LogEntriesComponent,
        SocialAccountsComponent,
        UserArgumentsComponent,
        UserCarsComponent,
        UserIapReceiptsComponent,
        UserOfferReceiptsComponent,
        UserProfileComponent,
        UserResourcesComponent,
        UserTiersComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        StoreModule.forFeature('user', userReducer),
        EffectsModule.forFeature([UserEffects]),
    ],
})
export class AdminModule {}
