import { Injectable } from "@angular/core";

import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];
  lazyUsers = [];

  constructor(private counterService: CounterService) {}

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInActiveToActive();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

  setActiveToLazy(id: number) {
    this.lazyUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.activeToLazy();
  }

  setInactiveToLazy(id: number) {
    this.lazyUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.inactiveToLazy();
  }

  setLazyToActive(id: number){
    this.activeUsers.push(this.lazyUsers[id]);
    this.lazyUsers.splice(id, 1);
    this.counterService.lazyToActive()
  }
  setLazyToInactive(id: number){
    this.inactiveUsers.push(this.lazyUsers[id]);
    this.lazyUsers.splice(id, 1);
    this.counterService.lazyToInactive()
  }
}
