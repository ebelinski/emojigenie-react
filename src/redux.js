import emojis from './emojis.json';

export const actionTypes = {
  QUERY: 'QUERY'
}

export const initialState = {
  emojis: emojis,
  query: "",
  filteredEmojis: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.QUERY:
      const query = action.query;

      if (!query) {
        return {
          ...state,
          query: query,
          filteredEmojis: []
        }
      }

      const filteredEmojis = state.emojis.filter(emoji => {
        if (emoji.description.toLowerCase().includes(query)) {return true;}
      });
      return {
        ...state,
        query: query,
        filteredEmojis: filteredEmojis
      }
    default: return state;
  }
}
