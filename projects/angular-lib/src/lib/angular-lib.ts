import { Component, Input, OnInit } from '@angular/core';
import { MyLibCore, MyLibCoreOptions } from '@monorepo/core';

@Component({
  selector: 'lib-angular-lib',
  imports: [],
  template: `<p>{{ greeting }}</p>`,
  styles: ``,
})
export class AngularLib implements OnInit {
  @Input() name = 'World';
  @Input() options: MyLibCoreOptions = {};

  greeting = '';

  ngOnInit(): void {
    const core = new MyLibCore(this.options);
    this.greeting = core.greet(this.name);
  }
}
