import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsViewComponent } from '../components/ads-view/ads-view.component';
import { DailyGiftComponent } from '../components/daily-gift/daily-gift.component';
import { FtueProgressComponent } from '../components/ftue-progress/ftue-progress.component';
import { FuelViewComponent } from '../components/fuel-view/fuel-view.component';
import { FusionCreditsComponent } from '../components/fusion-credits/fusion-credits.component';
import { LogEntriesComponent } from '../components/log-entries/log-entries.component';
import { SocialAccountsComponent } from '../components/social-accounts/social-accounts.component';
import { UserArgumentsComponent } from '../components/user-arguments/user-arguments.component';
import { UserCarsComponent } from '../components/user-cars/user-cars.component';
import { UserIapReceiptsComponent } from '../components/user-iap-receipts/user-iap-receipts.component';
import { UserOfferReceiptsComponent } from '../components/user-offer-receipts/user-offer-receipts.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { UserResourcesComponent } from '../components/user-resources/user-resources.component';
import { UserTiersComponent } from '../components/user-tiers/user-tiers.component';
import { AdminPageComponent } from '../pages/admin-page/admin-page.component';

const routes: Routes = [
    {
        path: '',
        component: AdminPageComponent,
        children: [
            {
                path: 'ads',
                component: AdsViewComponent,
            },
            {
                path: 'daily-gift',
                component: DailyGiftComponent,
            },
            {
                path: 'ftue-progess',
                component: FtueProgressComponent,
            },
            {
                path: 'fuel',
                component: FuelViewComponent,
            },
            {
                path: 'fusion',
                component: FusionCreditsComponent,
            },
            {
                path: 'logs',
                component: LogEntriesComponent,
            },
            {
                path: 'social',
                component: SocialAccountsComponent,
            },
            {
                path: 'user-argumnet',
                component: UserArgumentsComponent,
            },
            {
                path: 'user-cars',
                component: UserCarsComponent,
            },
            {
                path: 'user-iap',
                component: UserIapReceiptsComponent,
            },
            {
                path: 'user-offer',
                component: UserOfferReceiptsComponent,
            },
            {
                path: 'user-profile',
                component:  UserProfileComponent,
            },
            {
                path: 'user-resource',
                component:  UserResourcesComponent,
            },
            {
                path: 'user-tier',
                component:  UserTiersComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
