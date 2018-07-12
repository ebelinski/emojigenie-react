import emojis from './emojis.json';

export const actionTypes = {
}

export const initialState = {
  emojis: emojis
}

export const filterMiddleware = store => next => action => {
  next(action);
  switch (action.type) {
    default: break;
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
}
