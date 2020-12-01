import React, { Component } from "react"
import PropTypes from 'prop-types'
import moment from "moment"


const SingleMeteor = ({meteor: {name, mass,recclass, year}}) => {

  const outputDate = moment(year).format("yyyy")
  
    return (
      <div className="card text-center">
        <h2>{name}</h2>
        <h3>Mass: {mass}</h3>
        <h3>{outputDate}</h3>
        <div>
          <a href={recclass}
           className="btn btn-dark btn-sm">
            {recclass}
          </a>

        </div>
      </div>
    )
  }

  SingleMeteor.propTypes = {
      SingleMeteor: PropTypes.object
  }

export default SingleMeteor
    