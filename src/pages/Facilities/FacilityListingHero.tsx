const FacilityListingHero = () => {
    return (
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://img.freepik.com/free-vector/gradient-football-field-background_23-2149013356.jpg?size=626&ext=jpg&ga=GA1.2.2095105551.1696628625&semt=ais_hybrid')`,
          height: "85vh",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto  h-full text-white text-center flex justify-center items-center">
          <div className="flex flex-col gap-5">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl "
              style={{
                textShadow:
                  "1px 1px 2px #26BAA4, 0 0 1em #26BAA4, 0 0 0.2em #26BAA4",
              }}
            >
              Facility Listing
            </h1>
            <p
              className="text-xl px-8 sm:text-2xl md:text-3xl lg:text-4xl"
              style={{
                textShadow: "1px 1px 2px white, 0 0 1em #6173FF, 0 0 0.2em white",
              }}
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, explicabo? Sit accusamus tenetur sint animi beatae mollitia quis corrupti eos?
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FacilityListingHero;