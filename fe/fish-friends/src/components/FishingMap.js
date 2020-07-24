import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';


export default class FishingMap extends Component {
  state= {
    viewport: {
      width: '100%',
      height: '90vh',
      margin: 0,
      latitude: 40.7812,
      longitude: -73.9665,
      zoom: 15
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={'pk.eyJ1IjoiY25saWVuIiwiYSI6ImNrNGN5ZDF1MjAweTYzZG4wNTU1dnF1anYifQ.AFMTCTtSPBG8V3ddhfvv4w'}
      />
    )
  }
}
