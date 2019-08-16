import React from 'react'
import { connect } from 'react-redux'

import { getSmurfs } from '../actions'

const SmurfList = (props) => {
  console.log('smurfList props', props)
  return (
    <div className='tile'>
      <h3 className='title'>SMURF VILLAGE RESIDENTS:</h3>
      <button onClick={props.getSmurfs}>show smurfs</button>
      {props.smurfs.length ? (
        <div>
          {props.smurfs && props.smurfs.map((smurf, i) => (
            <div key={i}>
              <p>NAME: {smurf.name}</p>
              <span>AGE: {smurf.age}&nbsp;&nbsp;</span>
              <span>HEIGHT: {smurf.height}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className='subtitle'> </p>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList)
