import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="relative isolate lg:py-16 px-6 pt-14 lg:px-8 flex flex-col lg:flex-row bg-off-bg">
        <div className="w-2/5 pl-24">
          <h1 className="text-3xl font-semibold text-gray-900 mb-24">
            We're a brands <br />
            <span className="text-gray-900/75">best friend</span>
          </h1>
          <div className="mt-10 flex gap-x-6">
            <a
              href="#getintouch"
              className="text-sm font-semibold leading-6 text-gray-900 decoration-2 underline underline-offset-8 decoration-spaniel hover:decoration-dotted"
            >
              Let's talk
            </a>
          </div>
        </div>

        <div className="w-3/5 pl-24 ">
          <div className="flex flex-col lg:flex-row">
            <div className="w-4/12">
              <p className="font-semibold mb-2">EXLORE</p>
              <ul className="leading-loose font-normal text-slate-500">
                <li>
                  <a className="hover:text-spaniel" href="#services">
                    Services{" "}
                  </a>
                </li>
                <li>
                  <a className="hover:text-spaniel" href="#work">
                    Work{" "}
                  </a>
                </li>
                <li>
                  <a className="hover:text-spaniel" href="#about">
                    About{" "}
                  </a>
                </li>
                <li>
                  <a className="hover:text-spaniel" href="#blog">
                    Blog{" "}
                  </a>
                </li>
                <li>
                  <a className="hover:text-spaniel" href="#careers">
                    Careers{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-4/12 -ml-20">
              <p className="font-semibold mb-2">SERVICES</p>
              <ul className="leading-loose font-normal text-slate-500">
                <li>
                  <a className="hover:text-spaniel" href="#brand">
                    Brand{" "}
                  </a>
                </li>
                <li>
                  <a className="hover:text-spaniel" href="#development">
                    Development{" "}
                  </a>
                </li>
                <li>
                  <a className="hover:text-spaniel" href="#mrketing">
                    Marketing{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-4/12 -ml-16">
              <p className="font-semibold mb-2">QUESTION?</p>
              <p className="isolate font-medium mb-8">
                Call Us
                <br />
                <span className="font-normal">
                  <a className="hover:text-spaniel" href="#callus">
                    0121 345 678
                  </a>
                </span>
              </p>
              <p className="isolate font-medium">
                Email Us
                <br />
                <span className="font-normal">
                  <a className="hover:text-spaniel" href="#emailus">
                    info@digitalspaniel.co.uk
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pb-8 relative isolate flex flex-col lg:flex-row bg-off-bg">
        <div className="w-1/2 pl-24 py-1 sm:py-1 lg:py-1">
          Copyright © Digital Spaniel 2023. All rights reserved.
        </div>

        <div className="w-1/2 lg:pl-60">
          <span className="inline-block px-2">
            <FaFacebookF />
          </span>
          <span className="inline-block px-2">
            <FaInstagram />
          </span>
          <span className="inline-block px-2">
            <FaTwitter />
          </span>
          <span className="inline-block px-2">
            <FaLinkedin />
          </span>
        </div>
      </div>
    </footer>
  );
}
