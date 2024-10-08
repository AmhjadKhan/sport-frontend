import { Helmet } from "react-helmet"; // Import Helmet
import Hero from "./Components/ui/Home/Hero";
import Everyone from "./Components/ui/Home/Everyone";
import Testimonial from "./Components/ui/Home/testomonial/Testomonial";
import FeaturedFacilities from "./Components/ui/Home/FeaturedFacilities/FeaturedFacilities";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>SPORT HOME</title>
      </Helmet>
      <Hero />
      <FeaturedFacilities />
      <Everyone />
      <Testimonial />
    </div>
  );
};

export default App;
