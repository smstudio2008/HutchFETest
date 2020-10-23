import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminRoutingModule } from './routes/admin.routing.module';
import { UserTableComponent } from './components/user-table/user-table.component';



@NgModule({
  declarations: [AdminPageComponent, UserTableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
