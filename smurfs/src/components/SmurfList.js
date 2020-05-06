import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { getSmurfs, deleteSmurf } from '../actions'

import './SmurfList.css'

const SmurfList = props => {
  
  const [smurfList, setSmurfList] = useState([])

  useEffect(() => {
    props.getSmurfs()
    setSmurfList(props.smurfs)
  }, [props.smurfs.length])

  return (
    <div className="smurf-list">
      <h3 className="smurf-list-title">SMURF VILLAGE RESIDENTS:</h3>
      {/* <button onClick={props.getSmurfs}>show smurfs</button> */}

      {props.isLoading && (
        <Loader type="ThreeDots" color="#BBBBBB" height={10} width={90} />
      )}

      {props.error ? (
        <p>{props.error}</p>
      ) : (
        smurfList &&
        smurfList.map(smurf => (
          <div className="smurf-info" key={smurf.id}>
            <span>NAME: {smurf.name}</span>
            <span>AGE: {smurf.age}&nbsp;&nbsp;</span>
            <span>HEIGHT: {smurf.height}</span>
            <button onClick={() => props.deleteSmurf(smurf)}>DELETE</button>
          </div>
        ))
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  }
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(SmurfList)
