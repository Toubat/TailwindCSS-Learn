/* eslint-disable jsx-a11y/anchor-is-valid */
import house from "../images/house.png";

export function Navbar(): JSX.Element {
  return (
    <div>
      <nav className="bg-white/80 shadow-lg fixed top-0 left-0 right-0 backdrop-blur-md h-fit">
        <div className="px-4 max-w-6xl mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <img src={house} alt="" className="w-8 h-8 mr-2" />
                  <span className="font-semibold text-gray-500 text-lg">Prime Properties</span>
                </a>
              </div>
              <div className="hidden space-x-1 md:flex items-center">
                <a
                  className="py-4 px-2 text-green-500 font-semibold border-b-4 border-green-500 hover:text-green-500 transition duration-300"
                  href=""
                >
                  Home
                </a>
                <a
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  href=""
                >
                  Services
                </a>
                <a
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  href=""
                >
                  About
                </a>
                <a
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  href=""
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="pb-16"></div>
    </div>
  );
}
