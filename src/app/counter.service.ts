export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;
  activeToLazyCounter = 0;
  inactiveToLazyCounter = 0;
  lazyToActiveCounter = 0;
  lazyToInactiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
  }

  incrementInActiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
  }

  activeToLazy() {
    this.activeToLazyCounter++;
    console.log('Active to Lazy: ' + this.activeToLazyCounter);
  }

  inactiveToLazy() {
    this.inactiveToLazyCounter++;
    console.log('Inactive to Lazy: ' + this.inactiveToLazyCounter);
  }

  lazyToActive() {
    this.lazyToActiveCounter++;
    console.log('Lazy to Active: ' + this.lazyToActiveCounter);
  }

  lazyToInactive() {
    this.lazyToInactiveCounter++;
    console.log('Lazy to Inactive: ' + this.lazyToInactiveCounter);
  }
}
