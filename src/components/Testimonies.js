import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonyPhoto from "./testimonial_face01.png";

export default function Testimonies() {
  const [testimonies, setTestimonies] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3031/testimonies", requestOptions)
      .then((response) => response.json())
      .then((result) => setTestimonies(result))
      .catch((error) => console.log("Error fetching JSON data", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="lg:w-1/2 lg:pl-28 sm:pl-6 py-10 sm:py-20 lg:py-20 ">
        <h1 className="text-3xl font-semibold text-gray-900">
          Kind words
          <br />
          <span className="text-gray-900/75">from our clients</span>
        </h1>
      </div>

      <div className="lg:w-full sm:px-6 sm:-mt-10 lg:py-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-7xl mx-auto">
            <Carousel
              showArrows={false}
              showStatus={false}
              showThumbs={true}
              infiniteLoop={true}
              swipeable={true}
              centerMode={true}
              centerSlidePercentage={100} // Set centerSlidePercentage to 100 for mobile view
              emulateTouch={true} // Add emulateTouch prop for mobile touch support
            >
              {testimonies.map((testimony, index) => {
                const { id, content, name, title } = testimony;
                const cardBgColor =
                  index % 2 === 0
                    ? "bg-spaniel-blue text-white"
                    : "bg-spaniel-gray";
                return (
                  <div key={id} className="p-4">
                    <div className={`p-4 shadow-lg rounded-lg ${cardBgColor}`}>
                      <div className="relative">
                        {/* <div className="absolute -top-4 left-4 text-5xl text-gray-300">
                          &ldquo;
                        </div>
                        <div className="absolute -bottom-4 right-4 text-5xl text-gray-300">
                          &rdquo;
                        </div> */}
                        <div className="px-4 py-5 sm:p-6">
                          <p className="text-base italic">{content}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center p-4">
                        <div className="thumbnail">
                          <img
                            src={TestimonyPhoto}
                            alt={name}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                      <div className="px-4 pb-4 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {name}
                        </h3>
                        <p className="text-sm text-gray-500">{title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
