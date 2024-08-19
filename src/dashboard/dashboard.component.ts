import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatButtonModule, RouterOutlet, MatCardModule,
    MatProgressBarModule, MatChipsModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
