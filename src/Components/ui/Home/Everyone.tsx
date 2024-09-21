
const EveryoneData = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VCyVy_t5zMbCEQEw6Pxft1Kq40sU3r03OA&s",
    name: "Club Team",
    title:
      "Perfect for those who enjoy playing their favorite sports without the need for a professional league.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxcePSicB8YabyDE0YGu_W0eiWLib4rCXNQ&s",
    name: "Womens Team",
    title:
      "Easily book pitches for practice sessions, tournaments, or friendly matches.",
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGuCvsuPRiGGXTK9hY1BECgcDhjLFQaA3ow&s',
    name: "Event Organizers",
    title:
      " Planning a sports event? Our platform makes it simple to reserve the ideal pitch.",
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTV6FVkQco8xSk-4tXM2X50Ba3PGqLEYYgkCFKxOjWfIUZ5M0s2VW56GkSrKrHHwk1N7Q&usqp=CAU',
    name: "Hockey team",
    title:
      " Ideal for educational institutions looking for additional space for sports activities.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxcePSicB8YabyDE0YGu_W0eiWLib4rCXNQ&s",
    name: "Womens Team",
    title:
      "Easily book pitches for practice sessions, tournaments, or friendly matches.",
  },
  {
    image: 'https://worldlacrosse.sport/wp-content/uploads/2024/09/Screenshot-2024-09-04-at-1.27.19%E2%80%AFPM-e1725474506842.png',
    name: "spport team",
    title:
      "Great for organizing team-building activities or company sports days.",
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Nt-m0ex9QUaNWtVeW9IHT6vhu-khcE2HoQ&s',
    name: "Friends Team",
    title:
      "Enjoy quality time with your loved ones by booking a pitch for a fun game.",
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTV6FVkQco8xSk-4tXM2X50Ba3PGqLEYYgkCFKxOjWfIUZ5M0s2VW56GkSrKrHHwk1N7Q&usqp=CAU',
    name: "Hockey team",
    title:
      " Ideal for educational institutions looking for additional space for sports activities.",
  }
];

type TWhoCanUse = {
  image: string;
  title: string;
  name: string;
};

const Everyone = () => {
  return (
    <div className="dark:bg-slate-600 bg-slate-50">
      <div className="container mx-auto py-16 px-8">
        <div className="mb-16">
          <h3 className="heading-title">Who Can Use This Platform?</h3>
          <p className="heading-p px-20">
            Our platform is open to everyone! Whether you're a sports
            enthusiast, a casual player, or organizing a friendly match, our
            easy-to-use booking system is here to serve your needs. Here's who
            can
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10 place-items-center">
          {EveryoneData?.map((item: TWhoCanUse, index: number) => (
            <div
              key={index}
              className=" bg-white dark:bg-slate-500 shadow-sm px-8 py-6 rounded-md h-full m-6 sm:m-0"
            >
              <img className="size-20 mx-auto" src={item.image} alt="" />
              <p className="text-center my-4 text-xl font-semibold text-veryDarkViolet dark:text-white">
                {item?.name}
              </p>
              <p className="text-darkGrayishBlue dark:text-grayishBlue">
                {item?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Everyone;