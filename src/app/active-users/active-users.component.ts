import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-active-users',
  standalone:true,
  imports:[CommonModule],

  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

  onSetToLazy(stats: number){
    this.userService.setActiveToLazy(stats);
  }
}
