class User {
  constructor(user = {}) {
    this.username = user.username
    this.email = user.email
    this.firebaseUrl = user.firebaseUrl
  }

  static me() {
    return new User(JSON.parse(localStorage.getItem('user')))
  }

  get data() {
    return {
      username: this.username,
      email: this.email,
      firebaseUrl: this.firebase
    }
  }

  save() {
    localStorage.setItem(JSON.stringify(this.user))
  }
}

export default User
