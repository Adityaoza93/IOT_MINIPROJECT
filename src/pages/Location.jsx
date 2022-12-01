import { useMemo, useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
const baseUrl =
  "https://us-central1-arduinogasproject.cloudfunctions.net/app/getData";

let lat = 19.020493;
let lon = 72.871292;

export default function Location() {
  const [data, setData] = useState({
    co2: [],
    dust: [],
    epoch: [],
    eth: [],
    h2: [],
    hum: [],
    lat: "",
    lon: "",
    mq135: [],
    o3: [],
    temp: [],
    voc: [],
  });

  const getData = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
      lat = Number(response.data.lat);
      lon = Number(response.data.lon);
    });
  };

  useEffect(() => getData(), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  console.log(lat, lon);
  // lat = Number(data.lat);
  // lon = Number(data.lon);

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: lat, lng: lon }), []);

  return (
    <div style={{ width: "100%" }}>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
