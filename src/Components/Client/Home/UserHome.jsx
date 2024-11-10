import { useContext, useState } from "react";
import Header from "./Head/Header";
import { EventContext } from "../Context/EventContext";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import main from "../../../assets/Globle.jpg";
import Buildapps from "../../../assets/buildapps.jpeg";
import service from "../../../assets/service.jpeg";
import customer from "../../../assets/cutumer.jpg";
import web from "../../../assets/web.jpg";

const UserHome = () => {
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

  const currentCategory = categories[currentCategoryIndex]; // Current category data

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
          className="relative duration-300 bg-no-repeat h-screen"
        >
          {/* Background overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,1.5)] via-[rgba(0,0,0,.7)] to-[rgba(0,0,0,0)] blur-1 transition-opacity duration-1000`}
          />

          {/* Left Button - Previous Category */}
          <button
            onClick={handlePreviousCategory}
            className="absolute left-12 top-1/2 border rounded-full shadow-lg transform hover:animate-pulse opacity-70 duration-300 hover:opacity-100 -translate-y-1/2 text-white"
          >
            <PiCaretLeftBold className="h-12 w-12 p-2" />
          </button>

          {/* Right Button - Next Category */}
          <button
            onClick={handleNextCategory}
            className="absolute right-12 top-1/2 border rounded-full transform shadow-lg hover:animate-pulse opacity-70 hover:opacity-100 -translate-y-1/2 text-white"
          >
            <PiCaretRightBold className="h-12 w-12 p-2" />
          </button>

          {/* Category indicators */}
          <div className="bottom-12 left-1/2 absolute transform -translate-x-1/2">
            <div className="flex justify-center gap-3 items-center">
              {categories.map((_, index) => (
                <span
                  key={index}
                  onClick={() => selectedindex(index)}
                  className={`h-3 w-3 rounded-full border ${
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
        <section className="absolute w-fit inset-60 text-white">
          <div className="mb-8">
            <h2 className="text-2xl tracking-wider font-semibold">
              {currentCategory.title}
            </h2>
            <h3 className="text-4xl mt-2 w-[500px] [text-shadow:2px_3px_7px_rgb(0,0,0,1)]">
              {currentCategory.heading}
            </h3>
            <p className="mt-4 w-[600px] text-lg [text-shadow:1px_2px_3px_rgb(0,0,0,.7)]">
              {currentCategory.description}
            </p>
            <button className="mt-12 border bg-opacity-10 hover:cursor-pointer hover:bg-opacity-50 hover:scale-105 duration-700 hover:animate-pulses hover:bg-[rgb(0,0,0,1)] w-fit px-5 py-2 rounded text-base text-white">
              Read More
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default UserHome;
