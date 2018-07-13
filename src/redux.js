import emojis from './emojis.json';

export const actionTypes = {
  QUERY: 'QUERY'
}

export const initialState = {
  emojis: emojis,
  query: ""
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.QUERY:
      return {
        ...state,
        query: action.query
      }
    default: return state;
  }
}
