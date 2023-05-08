import { Component, ViewEncapsulation } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from './services/productservice';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ConfirmationService,MessageService,ProductService],
    encapsulation: ViewEncapsulation.None
    
})
export class AppComponent {

    constructor() { }
}
