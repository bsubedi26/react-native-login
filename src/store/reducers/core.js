import { ActionTypes } from '../types'

export const initReducer = (state = {}, action) => {
  switch(action.type) {
    case ActionTypes.INIT_START_LOADING:
    return {
      ...state,
      errors: null,
      [become]: 'IN_PROGRESS'
    }

    default:
      return state;
  }
}

export const fetchInProgressReducer = (state = {}, action) => {
  switch(action.type) {
    case ActionTypes.FETCH_IN_PROGRESS:
      return {
        ...state,
        error: null,
        [become]: 'INIT'
      }

    case ActionTypes.FETCH_IN_PROGRESS_FAIL:
      return {
        ...state,
        [become]: 'INIT',
        error: action.payload.error
      }

    default:
      return state;
  }
}