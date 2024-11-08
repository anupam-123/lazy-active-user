import { Component } from '@angular/core';
import { UserService } from './users.service';
import { LazyUsersComponent } from './lazy-users/lazy-users.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[LazyUsersComponent, ActiveUsersComponent, InactiveUsersComponent],
  providers: [UserService, CounterService]
})
export class AppComponent {
}
