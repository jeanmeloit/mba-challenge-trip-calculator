import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { TravelComponent } from './travel.component';

const routes: Routes = [
  {
    path: '',
    component: TravelComponent,
    children: [
      { path: '', redirectTo: 'checkout', pathMatch: 'full' },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelRoutingModule {}
