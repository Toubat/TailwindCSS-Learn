export function GradientSection() {
  return (
    <div className="flex items-center h-screen bg-gradient-to-tl from-green-100 to-green-500 mt-20">
      <div className="container mx-auto px-6 mt-40 flex flex-col md:block">
        <h2 className="text-5xl font-bold text-white mb-6 text-center md:text-left">
          Save up to 50% on broker commisions
        </h2>
        <h3 className="text-3xl mb-8 text-gray-100 text-center md:text-left">
          Lowest brokerage fees
        </h3>
        <button className="flex-grow-0 bg-white rounded-lg uppercase px-8 py-4 font-bold tracking-wider shadow-lg hover:bg-gray-200 transition active:bg-gray-100">
          Enquire
        </button>
      </div>
    </div>
  );
}
