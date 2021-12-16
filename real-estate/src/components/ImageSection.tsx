export function ImageSection() {
  return (
    <div className="flex items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500 mt-20">
      <div className="container mx-auto px-6 mt-40 flex flex-col md:block">
        <h2 className="text-5xl font-bold text-white mb-6 text-center md:text-left">
          Experience luxury Like Never Before
        </h2>
        <h3 className="text-3xl mb-8 text-gray-100 text-center md:text-left">
          50+ Exotic locations across the globe
        </h3>
        <button className="flex-grow-0 text-white uppercase border-2 px-8 py-4 font-bold tracking-wider shadow-lg hover:bg-pink-400 transition active:bg-pink-300">
          Explore Locations
        </button>
      </div>
    </div>
  );
}
