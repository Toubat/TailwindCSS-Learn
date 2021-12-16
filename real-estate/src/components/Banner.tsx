/* eslint-disable jsx-a11y/anchor-is-valid */

export function Banner() {
  return (
    <main className="mt-10 px-4 md:mt-16">
      <div className="text-center">
        <h1 className="tracking-tight font-extrabold text-4xl sm:text-5xl md:text-6xl">
          <span className="block">Premium Properties</span>
          <span className="block text-green-500">Non-premium Prices</span>
        </h1>
        <p className="mt-3 text-gray-500 md:text-xl md:mt-5 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto">
          At prime properties we ensure that our clients get the best of our priority and budget is
          our constrain. Picck and choose from 1000+ properties acros the globe
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="sm:m-2">
            <a
              href=""
              className="flex justify-center rounded-md bg-green-500 text-white px-8 py-3 font-semibold shadow-md hover:bg-green-600 hover:ring-2 ring-offset-2 ring-green-200 transition active:bg-green-400"
            >
              View Properties
            </a>
          </div>
          <div className="mt-3 sm:m-2">
            <a
              href=""
              className="flex justify-center rounded-md bg-green-100 text-green-700 px-8 py-3 font-semibold shadow-md hover:bg-green-200 hover:ring-2 ring-offset-2 ring-green-200 transition active:bg-green-100"
            >
              Explore locations
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
