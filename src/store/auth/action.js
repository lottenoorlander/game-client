import api from "../../api";

export function signUp(userName, password) {
  return function thunk(dispatch, getState) {
    api("/user", {
      method: "POST",
      body: {
        userName: userName,
        password: password
      }
    })
      .then(data => dispatch(login(userName, password)))
      .catch(err => console.log("err", err));
  };
}

export function login(userName, password) {
  return function thunk(dispatch, getState) {
    api("/login", {
      method: "POST",
      body: {
        userName: userName,
        password: password
      }
    }).then(user => {
      dispatch(userLoggedIn(user.jwt, user.userName));
    });
  };
}

// An action creator
export function userLoggedIn(jwt, userName) {
  return {
    type: "auth/USER_LOGGED_IN",
    payload: { jwt, userName }
  };
}
