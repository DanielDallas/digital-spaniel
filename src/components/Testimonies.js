import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Testimonies() {
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    fetchTestimonies();
  }, []);

  const fetchTestimonies = async () => {
    try {
      const response = await fetch("testimonials.json");
      const data = await response.json();
      setTestimonies(data);
    } catch (error) {
      console.error("Error fetching testimonies:", error);
    }
  };

  return (
    <div>
      <div className="w-1/2 pl-28 py-10 sm:py-20 lg:py-20 ">
        <h1 className="text-3xl font-semibold text-gray-900">
          Kind words
          <br />
          <span className="text-gray-900/75">from our clients</span>
        </h1>
      </div>

      <div className="w-full bg-off-bg pl-28 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Carousel
              showArrows={true}
              showStatus={true}
              renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 text-gray-600"
                    onClick={onClickHandler}
                  >
                    <FaArrowLeft size={24} />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 text-gray-600"
                    onClick={onClickHandler}
                  >
                    <FaArrowRight size={24} />
                  </button>
                )
              }
              renderIndicator={(onClickHandler, isSelected, index, label) => (
                <button
                  className={`${
                    isSelected ? "bg-gray-900" : "bg-gray-300"
                  } w-4 h-4 rounded-full mx-1 focus:outline-none`}
                  onClick={onClickHandler}
                  title={label}
                />
              )}
            >
              {testimonies.map((testimony) => (
                <div
                  key={testimony.id}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="px-4 py-5 sm:p-6 flex items-center">
                    <img
                      src={`./data/photos/${testimony.photo}`}
                      alt={testimony.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {testimony.name}
                      </h3>
                      <p className="text-sm text-gray-500">{testimony.title}</p>
                    </div>
                  </div>
                  <div className="px-4 pb-4 sm:p-6">
                    <p className="text-base text-gray-500">
                      {testimony.content}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
