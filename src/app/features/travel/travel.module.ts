import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelRoutingModule } from './travel-routing.module';
import { TravelComponent } from './travel.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommonsModule } from '@common/commons.module';

@NgModule({
  declarations: [TravelComponent, CheckoutComponent],
  imports: [CommonModule, TravelRoutingModule, CommonsModule],
})
export class TravelModule {}
