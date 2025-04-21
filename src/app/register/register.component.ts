import { Component } from '@angular/core';
import {FooterComponent} from "../shared/components/footer/footer.component";
import {HeaderComponent} from "../shared/components/header/header.component";

@Component({
  selector: 'app-register',
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
