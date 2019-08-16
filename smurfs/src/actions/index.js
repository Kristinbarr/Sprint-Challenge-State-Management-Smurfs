import axios from 'axios'

// ACTION TYPES
export const SUBMIT_SMURF_START = 'SUBMIT_SMURF_START'
export const SUBMIT_SMURF_SUCCESS = 'SUBMIT_SMURF_SUCCESS'
export const SUBMIT_SMURF_FAILURE = 'SUBMIT_SMURF_FAILURE'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

// THUNK contains asynchronous function and dispatches objects
export const submitSmurf = (smurf) => {
  let params = {
    name: smurf.name,
    age: smurf.age,
    height: smurf.height
  }
  return (dispatch) => {
    dispatch({ type: SUBMIT_SMURF_START })
    axios
      .post(
        'http://localhost:3333/smurfs', params)
      .then((res) => {
        dispatch({ type: SUBMIT_SMURF_SUCCESS, payload: res.data.data })
      })
      .catch((err) => {
        dispatch({ type: SUBMIT_SMURF_FAILURE, payload: err.response })
      })
  }
}

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS_START })
    axios
      .get('http://localhost:3333/smurfs')
      .then((res) => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.response })
      })
  }
}
