import {observable, action} from 'mobx'

class AuthStore {
  @observable loginMail: string = ''
  @observable loginMailPwd: string = ''

  @action.bound setLoginMail(mail: string): void {
    this.loginMail = mail
  }
  @action.bound setLoginMailPwd(pwd: string): void {
    this.loginMailPwd = pwd
  }

}

const auth = new AuthStore()
export {
  auth,
  AuthStore
}

