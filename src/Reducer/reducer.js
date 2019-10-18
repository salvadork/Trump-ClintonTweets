const reducer = (state = {}, action) => {
    switch (action.type) {
      case "REQUEST_TRUMP_DATA":
        return { ...state, loading: true };
      case "RECEIVE_TRUMP_DATA":
        return { ...state, trumptweets: action.data.statuses};
        case "REQUEST_CLINTON_DATA":
        return { ...state, loading: true };
      case "RECEIVE_CLINTON_DATA":
        return { ...state, clintontweets: action.data.statuses};
      default:
        return state;
    }
  };
  
  export default reducer;