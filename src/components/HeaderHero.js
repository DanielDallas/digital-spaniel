import { useEffect, useState, useCallback } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "./images/logo.png";
import herobg from "./images/herobg.png";

const navigation = [
  { name: "Services", href: "/" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setScrollDirection(prevScrollPos > currentScrollPos ? "up" : "down");
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    const scrollListener = () => handleScroll();

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [handleScroll]);

  return (
    <div className="bg-white">
      <header
        className={`${
          scrollDirection === "down"
            ? "fixed slide-in bg-off-bg text-inherit font-semibold"
            : "absolute bg-transparent"
        } top-0 z-50 w-full transition-all duration-700 ease-in-out text-spaniel-gray`}
      >
        <nav
          className="flex items-center justify-between p-4 lg:px-4"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Digital Spaniel</span>
              <img className="lg:pl-24 h-16 w-auto" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Mobile Menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 mr-28">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-normal leading-6 hover:underline hover:decoration-2 hover:underline-offset-8"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Digital Spaniel</span>
                <img className="h-10 w-auto" src={logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 flex flex-col lg:flex-row">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="sm:w-full w-1/2 lg:pl-24 py-10 sm:py-20 lg:py-40 ">
          <div className="hidden sm:w-full sm:mb-8 sm:flex">
            <div className="relative px-3 py-1 text-sm leading-6 text-spaniel">
              BRAND, DEV, ECOM, MARKETING
            </div>
          </div>
          <div className="">
            <h1 className="text-4xl font-semibold text-gray-900">
              We unleash <br />
              <span className="text-gray-900/75">business potential</span>
            </h1>
            <p className="mt-6 text-lg leading-7 text-gray-600 lg:pr-40">
              We create brand experiences which are memorable and distinct. Our
              experienced team create and develop brands with personality and
              resonance.
            </p>
            <div className="mt-10 flex gap-x-6">
              <a
                href="#getintouch"
                className="text-sm font-semibold leading-6 text-gray-900 decoration-2 underline underline-offset-8 decoration-spaniel hover:decoration-dotted"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        <div className="sm:hidden w-1/2 -mt-40">
          <img
            src={herobg}
            alt="HeroImg"
            className="w-6/12 absolute right-0 top-0"
          />
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
