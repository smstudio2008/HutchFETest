import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    {
        path: 'login',
        loadChildren: () =>
            import('./feature/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./feature/client/modules/admin/admin.module').then(
                (m) => m.AdminModule
            ),
            canActivate: [AuthGuard],
    },
    { path: '**', redirectTo: '/admin' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
