class User {
  constructor(user = {}) {
    this.username = user.username
    this.email = user.email
    this.firebaseUrl = user.firebaseUrl
    this.token = user.token
  }

  static me() {
    return new User(JSON.parse(localStorage.getItem('user')))
  }

  get data() {
    return {
      username: this.username,
      email: this.email,
      firebaseUrl: this.firebaseUrl,
      token: this.token
    }
  }

  save() {
    localStorage.setItem('user', JSON.stringify(this.data))
  }
}

export default User
