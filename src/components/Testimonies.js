import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      <div className="w-1/2 pl-28 py-10 sm:py-20 lg:py-20 ">
        <h1 className="text-3xl font-semibold text-gray-900">
          Kind words
          <br />
          <span className="text-gray-900/75">from our clients</span>
        </h1>
      </div>

      <div className="w-full py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Carousel
              showArrows={false}
              showStatus={false}
              showThumbs={true}
              infiniteLoop={true}
              swipeable={true}
              centerMode={true}
              centerSlidePercentage={33.33}
            >
              {testimonies.map((testimony, index) => {
                const { id, content, photo, name, title } = testimony;
                const cardBgColor =
                  index % 2 === 0
                    ? "bg-spaniel-blue text-spaniel-white"
                    : "bg-gray-200";
                return (
                  <div key={id} className="p-4">
                    <div className={`p-4 shadow-lg rounded-lg ${cardBgColor}`}>
                      <div className="px-4 py-5 sm:p-6">
                        <p className="text-base text-gray-500">{content}</p>
                      </div>
                      <div className="flex items-center justify-center p-4">
                        <div className="thumbnail">
                          <img
                            src={`./${photo}`}
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
