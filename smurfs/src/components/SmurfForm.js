import React, { useState } from 'react'
import { connect } from 'react-redux'

import { submitSmurf } from '../actions/submitSmurfs'

import './SmurfForm.css'

const SmurfForm = props => {

  const [smurf, setSmurf] = useState({ name: '', age: '', height: '' })
  
  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.submitSmurf(smurf)
    setSmurf({ name: '', age: '', height: '' })
  }

  return (
    <div className='smurf-form'>
      <h3>REGISTER SMURF:</h3>
      <form onSubmit={handleSubmit}>
        <label>NAME:</label>
        <input
          type="text"
          value={smurf.name}
          name="name"
          onChange={handleChange}
        />
        <label>AGE:</label>
        <input
          type="text"
          value={smurf.age}
          name="age"
          onChange={handleChange}
        />
        <label>HEIGHT:</label>
        <input
          type="text"
          value={smurf.height}
          name="height"
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, { submitSmurf })(SmurfForm)
