const initialState = [];

export default function gameroomReducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_GAMEROOM": {
      return [...state, action.payload];
    }
    case "ALL_GAMEROOMS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
