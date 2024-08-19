import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatCardModule,
            MatChipsModule, MatProgressBarModule, HomeComponent, NavbarComponent,],
  templateUrl: 'app.component.html',
  styleUrls: []

})
export class AppComponent {
  title = 'helpdesk';
}
