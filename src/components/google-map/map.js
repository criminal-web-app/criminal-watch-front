import React from "react";
import { Marker } from "react-geo-maps";
// const locations = [
//   { lat: 14.1877, lng: 121.1251, title: "Calamba" },
// ];
 
class GeoMap extends React.Component {
  render() {
    return (
      <Marker
        apikey="AIzaSyBmLsBZ1qe8Wt4kAJamyTLNd5xw8fbqCaA"
        zoom={12}
        center={{ lat: 14.1877, lng: 121.1251 }}
        locations={this.props.locations}
        height={500}
        width={500}
      />
    );
  }
}
 
export default GeoMap;