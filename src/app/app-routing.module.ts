import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const ROUTES: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: '.pages/tabs/tabs.module#TabsPageModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
