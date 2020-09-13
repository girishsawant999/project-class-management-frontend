import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'prefix' },
            // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.SearchWorkerModule) },
            // { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
            // { path: 'comments', loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule) },
             { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
            // { path: 'message', loadChildren: () => import('./message/message.module').then(m => m.MessageModule) },
            // { path: 'notices', loadChildren: () => import('./notices/notices.module').then(m => m.NoticesModule) },
            // { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            // {
            //     path: 'manage-jobs', loadChildren: () =>
            //         import('./client/manage-jobs/manage-jobs.module').then(m => m.ManageJobsModule)
            // }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
