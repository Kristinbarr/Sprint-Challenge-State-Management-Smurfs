import axios from 'axios'

// ACTION TYPES
export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE'

export const deleteSmurf = smurf => {
  return dispatch => {
    dispatch({ type: DELETE_SMURF_START })
    axios
      .delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(res => {
        dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
      })
      .catch(err =>
        dispatch({ type: DELETE_SMURF_FAILURE, payload: err.response })
      )
  }
}
