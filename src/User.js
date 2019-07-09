const Activity = require('../src/Activity');
const activityData = require('../data/activity');

class User {
  constructor(userData) {
    this.userData = userData;
  }

  displayUsersFirstName() {
    let firstName = this.userData.name.substr(0, this.userData.name.indexOf(' '));
    return firstName;
  }

  findIdHelper(id) {
    let specificUserIntake = this.userData.filter(function(object) {
      return object.id === id
    })
    return specificUserIntake;
  }

  findFriends(id) {
    let user = this.findIdHelper(id);
    let userFriendsList = user[0].friends;
    let friendFind = userFriendsList.map(function(friend) {
      let friendActivity = activityData.filter(function(aUser) {
        return aUser.userID === friend;
      })
      return friendActivity
    });
    let friendsWeek = friendFind.map(function(friends) {
      return friends.slice(0, 7);
    })
    let friendsSteps = friendsWeek.map(function(friend) {
      let dayStep = friend.map(function(day) {
        return day.numSteps
      })
      return dayStep
    })
    return friendsSteps
  }

}




if (typeof module !== 'undefined') {
  module.exports = User;
}