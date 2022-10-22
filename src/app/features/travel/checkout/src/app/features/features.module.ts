import { NgModule } from '@angular/core';

import { CommonsModule } from '@common/commons.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonsModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
