import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminRoutingModule } from './routes/admin.routing.module';
import { UserTableComponent } from './components/user-table/user-table.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './store/reducer/user.reducer';
import { UserEffects } from './store/effects/user.effects';

@NgModule({
    declarations: [AdminPageComponent, UserTableComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        StoreModule.forFeature('user', userReducer),
        EffectsModule.forFeature([UserEffects]),
    ],
})
export class AdminModule {}
