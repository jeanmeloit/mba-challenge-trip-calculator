import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelRoutingModule } from './travel-routing.module';
import { TravelComponent } from './travel.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommonsModule } from '@common/commons.module';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [TravelComponent, CheckoutComponent, SummaryComponent],
  imports: [CommonModule, TravelRoutingModule, CommonsModule],
})
export class TravelModule {}
