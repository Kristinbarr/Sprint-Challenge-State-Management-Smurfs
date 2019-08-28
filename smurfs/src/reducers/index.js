import {
  getSmurfs,
  SUBMIT_SMURF_START,
  SUBMIT_SMURF_SUCCESS,
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS
} from '../actions'

export const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  isSubmitting: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SMURF_START:
      return {
        ...state,
        smurfs: [],
        isSubmitting: true,
        error: ''
      }
    case SUBMIT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isSubmitting: false,
        error: ''
      }
    case FETCH_SMURFS_START:
      return {
        ...state,
        smurfs: [],
        fetchingSmurfs: true,
        error: ''
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: ''
      }
    default:
      return state
  }
}
