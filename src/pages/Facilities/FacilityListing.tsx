import { Helmet } from "react-helmet";
import FacilityListingHero from "./FacilityListingHero";
import FacilityListingTable from "./FacilityListingTable";

const FacilityListing = () => {
  return (
    <>
    <div>
      <Helmet>SPORT FACILITY</Helmet>
    </div>
    <div>
      <FacilityListingHero />
      <FacilityListingTable />
    </div>
    </>
  );
};

export default FacilityListing;