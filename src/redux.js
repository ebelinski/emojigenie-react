import allEmojis from './emoji.json';
import { applyModifications } from './emojiHelper';

export const actionTypes = {
  QUERY: 'QUERY'
}

const emojis = applyModifications(allEmojis);

export const initialState = {
  emojis: emojis,
  query: "",
  filteredEmojis: emojis
}

function filterEmojis(allEmojis, query, oldQuery, oldFilteredEmojis) {
  if (!query) return allEmojis;

  const emojisToSearchThrough = query.includes(oldQuery)
    ? oldFilteredEmojis 
    : allEmojis;

  const lowerCaseQuery = query.toLowerCase();
  const filteredEmojis = emojisToSearchThrough.filter(emoji => {
    if (emoji.name.toLowerCase().includes(lowerCaseQuery)) return true;
    if (emoji.keywords.toLowerCase().includes(lowerCaseQuery)) return true;
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
        filteredEmojis: filterEmojis(
          state.emojis, 
          action.query,
          state.query,
          state.filteredEmojis
        )
      }
    default: return state;
  }
}
