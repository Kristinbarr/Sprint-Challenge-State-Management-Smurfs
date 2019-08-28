import React from 'react'
import { connect } from 'react-redux'

import Loader from 'react-loader-spinner'

import { getSmurfs } from '../actions'

const SmurfList = (props) => {
  console.log('smurfList props', props)
  return (
    <div className='tile'>
      <h3 className='title'>SMURF VILLAGE RESIDENTS:</h3>
      <button onClick={props.getSmurfs}>show smurfs</button>
      {console.log('smurfList inside', props)}
      {props.fetchingSmurfs ? (
        <Loader type='ThreeDots' color='#BBBBBB' height={10} width={90} />
      ) : (
        <div>
          {props.smurfs.map((smurf, i) => (
            <div key={i}>
              <p>NAME: {smurf.name}</p>
              <span>AGE: {smurf.age}&nbsp;&nbsp;</span>
              <span>HEIGHT: {smurf.height}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList)
