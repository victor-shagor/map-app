import { useState } from "react";
import axios from "axios";
import osmtogeojson from "osmtogeojson";
import Swal from "sweetalert2";

import Map from "components/Map";
import GeoLocationBoxForm from "components/GeoLocationBoxForm";
import EmptyMapState from "components/EmptyMapState";

const Home = () => {
  const [features, setFeatures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState({
    minlong: "",
    minlat: "",
    maxlong: "",
    maxlat: "",
  });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  //takes an error and return a better formated error message
  const getErrorMsg = (err) => {
    let errorMessage =
      err?.response?.data || "Something went wrong please try again later";
    if (
      errorMessage.includes("You requested too many nodes (limit is 50000)")
    ) {
      errorMessage =
        "The area requested is to large, kindly request for a smaller area";
    }
    return errorMessage;
  };

  //make api call to the openstreetmap api and convert the osm response to geoJSON
  const getGeoJsonData = async () => {
    try {
      setIsLoading(true);
      const bbox = `${inputData.minlong},${inputData.minlat},${inputData.maxlong},${inputData.maxlat}`;
      const osmData = await axios.get(
        `https://www.openstreetmap.org/api/0.6/map?bbox=${bbox}`
      );

      const geoJsondata = osmtogeojson(osmData.data, { flatProperties: true });
      setFeatures(geoJsondata?.features);
      setIsLoading(false);
    } catch (err) {
      const errorMessage = getErrorMsg();
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    }
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    getGeoJsonData();
  };

  return (
    <div className="container" data-testid="container">
      <GeoLocationBoxForm
        inputData={inputData}
        handleChange={handleChange}
        onSubmit={onClickSubmit}
        isLoading={isLoading}
      />
      {features.length ? (
        <Map features={features} />
      ) : (
        <EmptyMapState isLoading={isLoading} />
      )}
    </div>
  );
};
export default Home;
