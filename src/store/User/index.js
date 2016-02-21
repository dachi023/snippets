class User {
  constructor(user = {}) {
    if (!user) {
      user = {}
    }
    this.data = user
  }

  static me() {
    return new User(JSON.parse(localStorage.getItem('user')))
  }

  get keys() {
    return ['username', 'email', 'firebaseUrl', 'token']
  }

  get data() {
    return {
      username: this.username,
      email: this.email,
      firebaseUrl: this.firebaseUrl,
      token: this.token
    }
  }

  set data(user) {
    for (let i = 0, len = this.keys.length; i < len; i++) {
      const key = this.keys[i]
      if (user[key]) {
        this[key] = user[key]
        continue
      }
      if (!this[key]) {
        this[key] = null
      }
    }
  }

  get isLogged() {
    return this.token != null
  }

  save() {
    localStorage.setItem('user', JSON.stringify(this.data))
  }
}

export default User
