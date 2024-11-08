import { Component, OnInit } from "@angular/core";

import { UserService } from "../users.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-inactive-users",
  standalone:true,
  imports:[CommonModule],

  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }

  onSetToLazy(id: number) {
    this.userService.setInactiveToLazy(id);
  }
}
