import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function WhatWeAreCapableOf() {
  return (
    <div className="relative isolate px-6 lg:pt-14 lg:px-8 flex flex-col lg:flex-row bg-off-bg">
      <div className="lg:w-1/2 lg:pl-24 py-10 sm:py-20 lg:py-40 ">
        <h1 className="text-3xl font-semibold text-gray-900">
          What are <br />
          <span className="text-gray-900/75">we capable of</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 lg:pr-40">
          By focusing on design as an enabler and putting a huge emphasis on our
          clients as co-producers, we create innovative, sustainable marketing
          that enhances brand experience and user engagement.
        </p>
        <div className="mt-10 flex gap-x-6">
          <a
            href="#getintouch"
            className="text-sm font-semibold leading-6 text-gray-900 decoration-2 underline underline-offset-8 decoration-spaniel hover:decoration-dotted"
          >
            Our Process
          </a>
        </div>
      </div>

      <div className="lg:w-1/2 lg:pl-24 py-10 sm:py-2 sm:pb-10 lg:py-40 ">
        <div className="flex flex-col lg:flex-row sm:flex-row">
          <div className="lg:w-1/2 mb-8">
            <p className="font-semibold">BRAND</p>
            <p className="mb-10">
              <a className="hover:text-spaniel" href="#brand">
                Brand Strategy{" "}
                <FontAwesomeIcon
                  icon={faCircleChevronRight}
                  style={{ color: "#C0345E", marginLeft: "2px" }}
                />
              </a>
              <br />
              <a className="hover:text-spaniel" href="#logo">
                Logo & Name
              </a>
              <br />
              <a className="hover:text-spaniel" href="#apps">
                Identity & Collateral
              </a>
            </p>

            <p className="font-semibold">DEVELOPMENT</p>
            <p className="">
              <a className="hover:text-spaniel" href="#ecommerce">
                eCommerce
              </a>
              <br />
              <a className="hover:text-spaniel" href="#web">
                Web Development
              </a>
              <br />
              <a className="hover:text-spaniel" href="#apps">
                Mobile Apps
              </a>
            </p>
          </div>

          <div className="w-1/2 ml-6">
            <p className="font-semibold">MARKETING</p>
            <p className="">
              <a className="hover:text-spaniel" href="#digital">
                Digital
              </a>
              <br />
              <a className="hover:text-spaniel" href="#research">
                Market Research
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
