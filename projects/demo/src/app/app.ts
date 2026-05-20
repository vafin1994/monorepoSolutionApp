import { Component } from '@angular/core';
import { AngularLib } from 'angular-lib';

@Component({
  selector: 'app-root',
  imports: [AngularLib],
  template: `
    <h1>Monorepo Demo</h1>
    <lib-angular-lib name="Developer" />
    <lib-angular-lib name="World" [options]="{ debug: true }" />
  `,
  styleUrl: './app.less'
})
export class App {}
