export default (state, action) => {
  switch (action.type) {
    case "FETCH_PEOPLE": {
      return { data: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};