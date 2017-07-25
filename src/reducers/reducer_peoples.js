import { FETCH_PEOPLES, FETCH_PEOPLE } from '../actions/index';

const INITIAL_STATE = {all: [], post: null}


export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
      case FETCH_PEOPLE: {
        return { ...state, post: action.payload.data}
      }
      case FETCH_PEOPLES: {
        return { ...state, post: action.payload.data}
      }
      default:
        return state
    }


}
