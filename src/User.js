class User {
  constructor(userData) {
    this.userData = userData;
  }
  displayUsersFirstName() {
    let firstName = this.userData.name.substr(0, this.userData.name.indexOf(' '));
    return firstName;
  }
}


module.exports = User;