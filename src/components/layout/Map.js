import GoogleMapReact from "google-map-react"
import { Icon } from "@iconify/react"
import locationIcon from "@iconify/icons-mdi/map-marker"
import { Modal, Button } from "react-bootstrap"

const Map = ({ modalInfo }) => {
  const center = {
    lat: parseFloat(modalInfo.reclat),
    lng: parseFloat(modalInfo.reclong),
  }

  function LocationMarker({ lat, lng, onClick }) {
    return (
      <div className="location-marker" onClick={onClick}>
        <Icon icon={locationIcon} className="location-icon" />
      </div>
    )
  }

  const style = {
    width: "100%",
    height: "50vh",
    left: 0,
    top: 0,
    margin: 0,
    padding: 0,
    position: "relative",
    overFlow: "hidden",
    // clear: "right"
  }
  let showMap = true

  if (!center.lat) {
    showMap = false
  } else {
    showMap = true
  }

  return (
    <div className="map">
      {showMap ? (
        <GoogleMapReact
          options={style}
          style={style}
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
          defaultCenter={center}
          defaultZoom={8}
        >
          <LocationMarker lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
      ) : (
        <h1>No Map Available</h1>
      )}
    </div>
  )
}

export default Map
