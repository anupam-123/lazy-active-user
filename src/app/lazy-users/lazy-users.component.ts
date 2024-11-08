import { Component, OnInit } from "@angular/core";
import { UserService } from "../users.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-lazy-users",
  standalone: true,
  imports:[CommonModule],
  templateUrl: "./lazy-users.component.html",
  styleUrl: "./lazy-users.component.css",
})
export class LazyUsersComponent implements OnInit {
  users: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.lazyUsers;
  }

  onSetToActive(stat: number) {
    this.userService.setLazyToActive(stat);
  }
  onSetToInactive(stat: number) {
    this.userService.setLazyToInactive(stat);
  }
}
