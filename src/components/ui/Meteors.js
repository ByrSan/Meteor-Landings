import React from "react"
import SingleMeteor from "./SingleMeteor"
import Spinner from "../layout/Spinner"
import PropTypes from "prop-types"

const Meteors = ({ meteors, loading }) => {
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {meteors.map((meteor) => (
          <SingleMeteor key={meteor.id} meteor={meteor} />
        ))}
      </div>
    )
  }
}

Meteors.prototypes = {
  meteors: PropTypes.array.isRequired,
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
}

export default Meteors
