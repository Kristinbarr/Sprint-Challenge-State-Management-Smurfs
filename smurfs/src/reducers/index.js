import {
  SUBMIT_SMURF_START,
  SUBMIT_SMURF_SUCCESS,
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS
} from '../actions'

export const initialState = {
  smurfs: [],
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SMURF_START:
      return {
        ...state,
        smurfs: [],
        error: ''
      }
    case SUBMIT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        error: ''
      }
    case FETCH_SMURFS_START:
      return {
        ...state,
        smurfs: [],
        error: ''
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: ''
      }
    default:
      return state
  }
}
