import { Component } from '@angular/core';
import {FooterComponent} from "../shared/components/footer/footer.component";
import {HeaderComponent} from "../shared/components/header/header.component";

@Component({
  selector: 'app-login',
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
