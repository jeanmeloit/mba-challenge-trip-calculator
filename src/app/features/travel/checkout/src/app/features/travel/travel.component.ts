import { Component } from '@angular/core';

@Component({
  selector: 'jsh-travel',
  template: `
    <p-menubar styleClass="mb-2">
      <ng-template pTemplate="start">
        <img src="assets/travel/logo.png" height="40" class="mr-2" />
      </ng-template>
    </p-menubar>
    <router-outlet></router-outlet>
  `
})
export class TravelComponent {}
