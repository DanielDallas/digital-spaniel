import tiledimg from "./images/tiledimg.png";

export default function WeAllAbout() {
  return (
    <div>
      <div className="lg:w-1/2 lg:pl-28 pl-6 py-10 sm:py-20 lg:py-20 ">
        <h1 className="text-3xl font-semibold text-gray-900">
          What are <br />
          <span className="text-gray-900/75">we all about</span>
        </h1>
      </div>

      <div className="w-full bg-off-bg sm:px-6 lg:pl-28 sm:py-2 py-6">
        <img
          className="py-10 content-center"
          src={tiledimg}
          alt="Tiled Images"
        />

        <p className="lg:-mt-24 sm:-mt-16 pb-10">
          <a
            href="#about"
            className="mr-6 text-sm font-semibold leading-6 text-gray-900 decoration-2 underline underline-offset-8 decoration-spaniel hover:decoration-dotted"
          >
            About
          </a>
          <a
            href="#careers"
            className="text-sm font-semibold leading-6 text-gray-900 decoration-2 underline underline-offset-8 decoration-spaniel hover:decoration-dotted"
          >
            Careers
          </a>
        </p>
      </div>
    </div>
  );
}
