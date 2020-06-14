import types from './types';
import { Clipboard } from './interfaces';

export const addItem = (payload: Clipboard) => {
  return {
    type: types.add_item,
    payload,
  }
}

export const removeItem = (payload: Clipboard) => {
  return {
    type: types.remove_item,
    payload,
  }
}
