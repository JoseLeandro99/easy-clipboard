import produce from 'immer';
import { Clipboard, Action } from './interfaces';
import types from './types';

const INITIAL_STATE:Clipboard[] = [];

const reducer = (state = INITIAL_STATE, action: Action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.add_item: {
        draft.push(action.payload);
        break;
      }

      case types.remove_item: {
        
        break;
      }

      default:
    }
  });
}

export default reducer;
