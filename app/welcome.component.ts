import {Component} from '@angular/core';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
@Component({
    selector:'test-view',
    directives: [MODAL_DIRECTVES],
    viewProviders:[BS_VIEW_PROVIDERS],
    templateUrl: 'app/view/welcome.component.view.html'
})

export class WelcomeComponent{

}
//import{Component} from '@angular2/core';
//import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
//
//@Component({
//    selector: 'modal-demo',
//    directives: [MODAL_DIRECTVES],
//    viewProviders:[BS_VIEW_PROVIDERS],
//    templateUrl: './view/welcome.component.view.html'
//})
//
//export class WelcomeComponent{
//
//
//}