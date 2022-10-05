import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const EmptyMapState = ({ isLoading }) => {
  return (
    <div className="emty-map">
      {isLoading ? (
        <BounceLoader color="#36d7b7" />
      ) : (
        <p>kindly input a valid bounding box geolocation</p>
      )}
    </div>
  );
};

export default EmptyMapState;
