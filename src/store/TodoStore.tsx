import { observable, action, computed } from 'mobx'
import uuidv1 from 'uuid/v1'
import { TodoModel } from "../model";

class TodoStore {
  @observable todos: Array<TodoModel> = [
    { id: uuidv1(), title: '标题1', checked: false, createAt: 1561473966283 },
    { id: uuidv1(), title: '标题2', checked: false, createAt: 1561473966284 },
  ]


  @computed get checkedList(): Array<TodoModel> {
    return this.todos.filter(
      item => item.checked
    )
  }

  @computed get uncheckedList(): Array<TodoModel> {
    return this.todos.filter(
      item => !item.checked
    )
  }

  @action.bound checkTodo(id: number): void {
    this.todos = this.todos.map(
      item => item.id === id ? { ...item, checked: !item.checked } : item
    )
  }

  @action.bound
  addTodo(title: string): void {
    const item = this.createTodoByTitle(title)
    this.todos.unshift(item)
  }

  @action.bound
  deleteTod(id: number) {
    this.todos = this.todos.filter(
      item => item.id !== id
    )
  }

  private createTodoByTitle(title: string): TodoModel {
    return {
      id: uuidv1(),
      title,
      checked: false,
      createAt: Date.now()
    }
  }

}

const todo = new TodoStore()
export {
  todo,
  TodoStore
}
