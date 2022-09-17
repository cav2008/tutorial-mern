export const FETCH_ALL = 'FETCH_ALL';
export const CREATE = 'CREATE';


const postReducer = (state = [], action: any) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default postReducer;