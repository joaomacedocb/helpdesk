import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, RouterOutlet, MatCardModule, MatProgressBarModule, MatChipsModule,
    MatToolbarModule, MatIconModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
