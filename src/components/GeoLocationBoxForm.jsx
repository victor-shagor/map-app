import React from "react";

import Button from "./Button";
import Input from "./Inputs";

const GeoLocationBoxForm = ({
  inputData,
  handleChange,
  onSubmit,
  isLoading,
}) => {
  return (
    <form className="form-div" onSubmit={onSubmit} data-testid="form">
      <Input
        id={"minlong"}
        name={"minlong"}
        label="Min Longitude"
        value={inputData.minlong}
        onChange={handleChange}
        min={"-180"}
        max={"180"}
        type="number"
      />
      <Input
        name={"minlat"}
        id={"minlat"}
        label="Min Latitude"
        value={inputData.minlat}
        onChange={handleChange}
        min={"-90"}
        max={"90"}
        type="number"
      />
      <Input
        name={"maxlong"}
        id={"maxlong"}
        label="Max Longitude"
        value={inputData.maxlong}
        onChange={handleChange}
        min={"-180"}
        type="number"
        max={"180"}
      />
      <Input
        name={"maxlat"}
        id={"maxlat"}
        label="Max Latitude"
        value={inputData.maxlat}
        onChange={handleChange}
        min={"-90"}
        type="number"
        max={"90"}
      />
      <Button text={"submit"} isLoading={isLoading} />
    </form>
  );
};

export default GeoLocationBoxForm;
