

const Hero = () => {
  return (
    <>
    <section className="hero bg-bottom bg-cover w-full  py-12 ">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 relative">
          <div className="flex flex-col justify-center px-4 mb-8 lg:mb-0">
            <h4 className="text-[#aaf40c] lg:text-xl mb-2 ">
              Book Your Game Space in Seconds
            </h4>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-sans text-white">
              {" "}
              Discover 1 and <span className="text-[#aaf40c]">Reserve</span> Top
              Sports Venues!
            </h1>
            <p className="text-white text-base ">
              Play Without Limits. Easily find and book the best sports
              facilities around you. From fields to courts, secure your spot
              today. Solar-ICT.
            </p>
          </div>
          <div className=" text-center ">
            <img
              className="text-center mx-auto"
              src='https://www.flashcardsforkindergarten.com/wp-content/uploads/2021/02/sports-banner.jpg'
              alt="Banner"
            />
          </div>
        </div>

        <div className="hidden lg:block absolute top-72 left-36">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhB0b2u1vOy35UEIuQklGQ8E_7giaMVFM6w&s' alt="" />
        </div>

        <div className=" hidden lg:block absolute top-48 left-1/3">
          <img src='https://www.flashcardsforkindergarten.com/wp-content/uploads/2021/02/sports-banner.jpg' alt="" />
        </div>
      </section>
    </>
  )
}
 


export default Hero
