const BookingHero = () => {
    return (
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ABpa68I6x527IjVEdw2XXdF-W3MH_66Tmw&s')`,
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
              Booking
            </h1>
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              style={{
                // textShadow: "2px 2px 4px rgba(255, 255, 255, 0.4)"
                textShadow: "1px 1px 2px white, 0 0 1em #6173FF, 0 0 0.2em white",
              }}
            >
              Users can search by facility 
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default BookingHero;