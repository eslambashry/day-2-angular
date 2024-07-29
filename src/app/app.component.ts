import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {UsersComponent} from './users/users.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgbDropdownModule,NgbPaginationModule,UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notes';
}
