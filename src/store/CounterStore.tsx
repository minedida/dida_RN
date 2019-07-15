import {observable, action} from 'mobx'

class CounterStore {
  @observable count = 10

  @action.bound increment(): void {
    this.count++
  }

  @action.bound decrement(): void {
    this.count--
  }
}

const counter = new CounterStore()
export {
  counter,
  CounterStore
}

