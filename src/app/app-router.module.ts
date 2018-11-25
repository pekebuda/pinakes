import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './pages/tabs/tabs.module#TabsModule',
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { enableTracing: false })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
