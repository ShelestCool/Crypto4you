const initialState = {
  cryptoData: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CRYPTO_DATA":
      return { ...state, cryptoData: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
