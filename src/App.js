import React, { Fragment, useState } from "react"
import axios from "axios"
import Navbar from "./components/layout/Navbar"
import ReactTable from "./components/ui/ReactTable"
import AppState from "./context/api/AppState"
import "../src/styles/App.css"

const App = () => {
  const [meteors, setMeteors] = useState([])
  const [loading, setLoading] = useState(false)



  return (
    <AppState>
      <div className="App">
        <Navbar title="Meteor Landings" icon={"fa fa-rocket"} />
        <div className="container">
          <ReactTable  />
        </div>
      </div>
    </AppState>
  )
}

export default App
