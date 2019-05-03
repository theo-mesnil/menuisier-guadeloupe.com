import MapLayer from "pigeon-maps"
import Marker from "pigeon-marker"
import React, { Component } from "react"

class Map extends Component {
  state = {
    zoom: 13,
  }

  zoomToMarker = () => {
    this.setState({
      zoom: 15,
    })
  }

  render() {
    const { coords, height } = this.props
    const { zoom } = this.state

    return (
      <div>
        {typeof window !== "undefined" && (
          <MapLayer
            center={coords}
            zoom={zoom}
            height={height}
            minZoom={10}
            maxZoom={18}
          >
            <Marker anchor={coords} onClick={this.zoomToMarker} />
          </MapLayer>
        )}
      </div>
    )
  }
}

export default Map
