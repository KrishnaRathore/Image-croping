import { SettingComponent } from './setting/setting.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'invoice',
    pathMatch: 'full',
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  {
    path: 'setting',
    component: SettingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
