import Api from '@services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// Sample Req
// AuthenticationService.register({
//   email: 'test@test.com',
//   password: 'testpass'
// })
