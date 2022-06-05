import { useState, useCallback, memo } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import MopedIcon from "@mui/icons-material/Moped";

const containerStyle = {
  width: "100%",
  height: "100vh",
};
// -6.900696,
const centerDefault = {
  lat: -3.745,
  lng: -38.523,
};

const markers = [
  { id: "0", pos: { lat: -6.9001, lng: 107.538273 } },
  { id: "1", pos: { lat: -6.901282268780569, lng: 107.54047240882647 } },
  { id: "2", pos: { lat: -6.902986441986815, lng: 107.53938879644771 } },
  { id: "3", pos: { lat: -6.904946707322303, lng: 107.5317274195094 } },
  { id: "4", pos: { lat: -6.900521870487768, lng: 107.53037376843226 } },
];

const Location = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCN7fzrakEh4tx7C_2Fdm3Z6OGjBfIMWgc",
  });

  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [center, setCenter] = useState(centerDefault);
  const [zoom, setZoom] = useState(5);
  const [infoOpen, setInfoOpen] = useState(false);

  const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15,
  };

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();

    markers.forEach((marker) => {
      bounds.extend(marker.pos);
    });

    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const markerClickHandler = (e, place) => {
    setSelectedPlace(place);

    if (infoOpen) {
      setInfoOpen(false);
    }

    setInfoOpen(true);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <>
        {markers.map((marker, idx) => {
          return (
            <Marker
              key={idx}
              position={marker.pos}
              onClick={(e) => markerClickHandler(e, marker)}
            />
          );
        })}
        {infoOpen && selectedPlace && (
          <InfoWindow
            position={markers[selectedPlace.id].pos}
            onCloseClick={() => setInfoOpen(false)}
          >
            <div style={divStyle}>
              <h3>Location {+selectedPlace.id + 1}</h3>
              <div>Drop and Delivery point {+selectedPlace.id + 1}</div>
            </div>
          </InfoWindow>
        )}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Location);
