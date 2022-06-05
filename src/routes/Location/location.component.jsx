import { useState, useCallback, memo, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { UserContext } from "../../context/user.context";
import Link from "@mui/material/Link";

const containerStyle = {
  width: "100%",
  height: "100%",
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
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser == null) {
      navigate("/login");
    }
  }, []);

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
    <Box
      sx={{
        height: "700px",
        margin: "0 50px",
      }}
    >
      <Link
        href="#"
        sx={{ float: "right" }}
        onClick={() => {
          setCurrentUser(null);
          navigate("/login");
        }}
      >
        Logout
      </Link>
      <Typography
        textAlign={"center"}
        sx={{ fontSize: "2em", marginTop: 4, marginBottom: 4 }}
      >
        Nearest Drop-Point and Delivery-Point
      </Typography>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ mapTypeControl: false }}
      >
        <>
          {markers.map((marker, idx) => {
            return (
              <Marker
                key={idx}
                position={marker.pos}
                icon={{
                  path: "M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
                  fillColor: "#1e90ff",
                  fillOpacity: 1,
                  scale: 2,
                  strokeColor: "#3742fa",
                  strokeWeight: 2,
                }}
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
    </Box>
  ) : (
    <></>
  );
};

export default memo(Location);
