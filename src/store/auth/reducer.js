const initialState = {
  jwt: null,
  profile: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "auth/USER_LOGGED_IN": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
