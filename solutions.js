"use strict";

const validArgument = (users) => {
  if (users) return true;
};

// users who are interested in playing video games

const interestedPlayers = (users) => {
  if (validArgument(users)) {
    let keys = Object.keys(users);
    // console.log(keys)
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      // console.log(key);
      let userObj = users[key];
      // console.log(userObj.interests)
      let interest = userObj.interest;
      // for(let j = 0; j<interest.length; j++){
      //     if(interest[j]=="Video Games" || interest[j]=="Video Games")
      // }
    }
  }
};



export { interestedPlayers };
