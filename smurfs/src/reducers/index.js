import {
  SUBMIT_SMURF_START,
  SUBMIT_SMURF_SUCCESS,
  SUBMIT_SMURF_FAILURE,
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
} from '../actions'

export const initialState = {
  smurfs: [],
  isLoading: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  console.log('ACTION.TYPE:', action.type)
  console.log('ACTION.PAYLOAD:', action.payload)
  switch (action.type) {
    // SUBMIT SMURF
    case SUBMIT_SMURF_START:
      return {
        ...state,
        isLoading: true,
      }
    case SUBMIT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [action.payload],
        isLoading: false,
      }
    case SUBMIT_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: 'Error submitting smurf!' + action.payload
      }
    // FETCH SMURFS
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
      }
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: 'Error fetching Smurf!'
      }
    // DELETE SMURF
    case DELETE_SMURF_START:
      return {
        ...state,
        isLoading: true,
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
      }
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: 'Error deleting smurf!'
      }
    default:
      return state
  }
}
