import {Component,ViewContainerRef} from '@angular/core';
import {WelcomeComponent} from './welcome.component';


@Component({
  selector: 'my-app',
  directives: [WelcomeComponent],
  template: `<test-view></test-view>

  `,
})
export class AppComponent {
  public viewContainerRef =ViewContainerRef;
  public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }

}