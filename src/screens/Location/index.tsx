import React from "react";
import LocationCard from "../../components/Location/Card";
import { LocationContainer } from "./styles";

interface LocationProps {}

const Location: React.FunctionComponent<LocationProps> = () => {
  return (
    <LocationContainer>
      <LocationCard title="Venue1" description="Description"></LocationCard>
    </LocationContainer>
  );
};

export default Location;
