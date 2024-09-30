const FacilityListingHero = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #1A2980, #26D0CE)",
        overflow: "hidden",
      }}
    >
      {/* Adding subtle animated elements in the background */}
      <div className="absolute inset-0 bg-opacity-20">
        <div className="absolute w-40 h-40 bg-[#26BAA4] opacity-70 rounded-full animate-ping top-1/3 left-10"></div>
        <div className="absolute w-20 h-20 bg-[#6173FF] opacity-60 rounded-full animate-pulse top-1/2 right-20"></div>
      </div>

      <div className="container mx-auto h-full text-white text-center flex justify-center items-center z-10">
        <div className="flex flex-col gap-6 px-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold"
            style={{
              textShadow:
                "2px 2px 5px rgba(38, 186, 164, 0.8), 0 0 10px rgba(38, 186, 164, 0.5)",
            }}
          >
            Facility Listing
          </h1>
          <p
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light max-w-4xl mx-auto"
            style={{
              textShadow: "1px 1px 2px white, 0 0 10px #6173FF, 0 0 5px white",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
            explicabo? Sit accusamus tenetur sint animi beatae mollitia quis
            corrupti eos?
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacilityListingHero;
