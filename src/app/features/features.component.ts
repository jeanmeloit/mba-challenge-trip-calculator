import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'jsh-features',
  template: `
    <p-menubar styleClass="mb-2">
      <ng-template pTemplate="start">
        <img src="assets/travel/logo.png" height="40" class="mr-2" />
      </ng-template>
    </p-menubar>
    <router-outlet></router-outlet>
  `
})
export class FeaturesComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
