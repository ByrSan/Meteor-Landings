import React from 'react'
import moment from "moment"

function LocationInfoBox({modalInfo}) {

    const formattedYear = moment(modalInfo.year).format("yyyy");

    const style = {
        position: "absolute",
  top: "80px",
  right: "50px",
  padding: "20px",
  backgroundColor: "rgba(0,0,0,0.6)",
  borderRadius: "10px",
  color: "white"
  
    }
    return (
        <div className="location-info">
            <ul>
                <li>Name: <strong>{modalInfo.name}</strong></li>
                <li>Year: <strong>{formattedYear}</strong></li>
                <li>Size: <strong>{modalInfo.mass}</strong></li>

            </ul>
        </div>
    )
}

export default LocationInfoBox
