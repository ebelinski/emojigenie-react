import allEmojis from './emoji.json';
import { applyModifications } from './emojiHelper';

export const actionTypes = {
  QUERY: 'QUERY'
}

const emojis = applyModifications(allEmojis);

export const initialState = {
  emojis: emojis,
  query: "",
  filteredEmojis: []
}

function filterEmojis(emojis, query) {
  if (!query) return [];

  const lowerCaseQuery = query.toLowerCase();
  const filteredEmojis = emojis.filter(emoji => {
    if (emoji.name.toLowerCase().includes(lowerCaseQuery)) {return true;}
    if (emoji.keywords.toLowerCase().includes(lowerCaseQuery)) {return true;}
    return false;
  });

  return filteredEmojis;
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.QUERY:
      return {
        ...state,
        query: action.query,
        filteredEmojis: filterEmojis(state.emojis, action.query)
      }
    default: return state;
  }
}
