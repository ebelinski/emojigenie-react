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

      const lowerCaseQuery = query.toLowerCase();
      const filteredEmojis = state.emojis.filter(emoji => {
        if (emoji.description.toLowerCase().includes(lowerCaseQuery)) {return true;}
        for (var i = 0; i < emoji.aliases.length; i++) {
          if (emoji.aliases[i].toLowerCase().includes(lowerCaseQuery)) {return true};
        } 
        for (var i = 0; i < emoji.tags.length; i++) {
          if (emoji.tags[i].toLowerCase().includes(lowerCaseQuery)) {return true};
        }
        return false;
      });

      return {
        ...state,
        query: query,
        filteredEmojis: filteredEmojis
      }
    default: return state;
  }
}
