import axios from 'axios'

// ACTION TYPES
export const SUBMIT_SMURF_START = 'SUBMIT_SMURF_START'
export const SUBMIT_SMURF_SUCCESS = 'SUBMIT_SMURF_SUCCESS'
export const SUBMIT_SMURF_FAILURE = 'SUBMIT_SMURF_FAILURE'

// THUNK contains asynchronous function and dispatches objects
export const submitSmurf = (smurf) => dispatch => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_SMURF_START })
    axios
      .post(
        'http://localhost:3333/smurfs', smurf)
      .then((res) => {
        console.log('res',res)
        dispatch({ type: SUBMIT_SMURF_SUCCESS, payload: res.data.data })
      })
      .catch((err) => {
        dispatch({ type: SUBMIT_SMURF_FAILURE, payload: err.response })
      })
  }
}

