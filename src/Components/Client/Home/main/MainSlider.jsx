import { useContext, useEffect, useState } from "react";
import Header from "../Head/Header";
import { EventContext } from "../../Context/EventContext";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import main from "../../../../assets/Globle.jpg";
import Buildapps from "../../../../assets/buildapps.jpeg";
import service from "../../../../assets/service.jpeg";
import customer from "../../../../assets/cutumer.jpg";
import web from "../../../../assets/web.jpg";



const MainSlider = () => {
  const { isSticky } = useContext(EventContext);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousCategory = () => {
    setCurrentCategoryIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };
  const selectedindex = (index) => {
    setCurrentCategoryIndex(index);
  }

  const categories = [
    {
      id: 1,
      img: main,
      title: "Technology",
      heading: "Discover the Latest Break throughs in Technology",
      description:
        "Technology is transforming the world at an unprecedented pace. From artificial intelligence and blockchain to virtual reality and 5G.",
    },
    {
      id: 2,
      img: web,
      title: "Finance",
      heading: "Financial Freedom",
      description:
        "Understand personal finance, investment strategies, budgeting tips, and financial planning to secure your future.",
    },
    {
      id: 3,
      img: service,
      title: "Education",
      heading: "Learning & Growth",
      description:
        "Find educational resources, career advice, learning techniques, and tips to help you succeed academically and professionally.",
    },
    {
      id: 4,
      img: customer,
      title: "Travel",
      heading: "Explore the World",
      description:
        "Get inspired with travel guides, destination recommendations, tips for solo and group travel, and must-see places worldwide.",
    },
    {
      id: 5,
      img: Buildapps,
      title: "Health & Wellness",
      heading: "Your Guide to Better Health",
      description:
        "Learn how to improve your physical and mental health, discover fitness tips, nutrition advice, and wellness strategies.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
    }, 3000);
  
    return () => clearInterval(intervalId);
  }, [categories.length]);


  const currentCategory = categories[currentCategoryIndex]; 
  return (
    <>
      <main className="w-full">
        {/* Section with dynamic background image */}
        <section
          style={{
            backgroundImage: `url(${currentCategory.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative duration-300 bg-no-repeat lg:h-screen md:h-[80vh] sm:h-[60vh] h-[50vh]"
        >
          {/* Background overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,1.5)] via-[rgba(0,0,0,.7)] to-[rgba(0,0,0,0)] blur-1 transition-opacity duration-1000`}
          />

          {/* Left Button - Previous Category */}
          <button
            onClick={handlePreviousCategory}
            className="absolute md:left-10 lg:left-12 sm:left-8 left-4 top-1/2 border rounded-full shadow-lg transform hover:animate-pulse opacity-70 duration-300 hover:opacity-100 -translate-y-1/2 text-white"
          >
            <PiCaretLeftBold className="lg:h-12 lg:w-12  md:h-10 md:w-10 sm:h-8 sm:w-8 w-6 h-6 md:p-2 p-1" />
          </button>

          {/* Right Button - Next Category */}
          <button
            onClick={handleNextCategory}
            className="absolute md:right-10 lg:right-12 sm:right-8 right-4 top-1/2 border rounded-full transform shadow-lg hover:animate-pulse opacity-70 hover:opacity-100 -translate-y-1/2 text-white"
          >
            <PiCaretRightBold className="lg:h-12 lg:w-12  md:h-10 md:w-10 sm:h-8 sm:w-8 w-6 h-6 md:p-2 p-1" />
          </button>

          {/* Category indicators */}
          <div className="bottom-12  left-1/2 absolute transform -translate-x-1/2">
            <div className="flex justify-center gap-3 items-center">
              {categories.map((_, index) => (
                <span
                  key={index}
                  onClick={() => selectedindex(index)}
                  className={`md:h-3 md:w-3 h-2 w-2 rounded-full border ${
                    index === currentCategoryIndex ? "bg-white" : "border-white"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </section>

        {/* Navbar that becomes sticky on scroll */}
        <nav
          className={`transition-all ease-in-out duration-300 ${
            isSticky
              ? "fixed top-0 left-0 w-full bg-white shadow-lg z-50"
              : "absolute top-0 left-0 w-full z-10"
          }`}
        >
          <Header />
        </nav>

        {/* Main content section */}
        <section className="absolute  lg:inset-54 md:inset-48 sm:inset-36 inset-20 
                                      lG:top-1/4   md:top-[28%] sm:top-[18%] top-[12%] 
                                      lg:left-56   md:left-36 sm:left-32 left-16 
        w-fit  text-white">
          <div className="mb-8">
            <h2 className="md:text-2xl fit sm:text-xl text-lg tracking-wider font-semibold">
              {currentCategory.title}
            </h2>
            <h3 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold mt-2 lg:w-[500px] [text-shadow:2px_3px_7px_rgb(0,0,0,1)]">
              {currentCategory.heading}
            </h3>
            <p className="mt-4 lg:w-[600px] md:text-lg sm:text-base text-sm [text-shadow:1px_2px_3px_rgb(0,0,0,.7)]">
              {currentCategory.description}
            </p>
            <button className="lg:mt-12 md:mt-10 sm:mt-8 mt-6 border bg-opacity-10 hover:cursor-pointer hover:bg-opacity-50 hover:scale-105 duration-700 hover:animate-pulses hover:bg-[rgb(0,0,0,1)] w-fit md:px-5 md:py-2 px-3 py-1 rounded 
            lg:text-base md:text-[12pt] sm:text-sm text-xs text-white">
              Read More
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainSlider;
