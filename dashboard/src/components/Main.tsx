import { Navbar } from "./Navbar";

export function Main() {
  return (
    <div className="flex-1">
      <Navbar />
      <div className="bg-indigo-200 m-7 p-6">
        <div className="text-4xl text-gray-800 font-medium">Good Moring, Super Inc.</div>
        <div className="mt-4 text-md">These are the stats for today, have a good day!</div>
      </div>

      <div className="m-7 flex space-x-6">
        <div className="w-1/2 bg-white p-4">
          <div>
            <div className="bg-red-400 w-10 h-10 rounded-full"></div>
            <div className="font-bold text-xl text-gray-700 mt-2">Super plus</div>
            <div className="uppercase my-3 font-bold text-sm text-gray-400">Sales</div>
            <span className="font-bold text-3xl">$25,647</span>
            <span className="bg-green-400 text-white px-3 mx-3 py-1 rounded-full text-sm font-semibold align-text-top">
              +58%
            </span>
          </div>
        </div>
        <div className="w-1/2 bg-white p-4">
          <div className="bg-yellow-400 w-10 h-10 rounded-full"></div>
          <div className="font-bold text-xl text-gray-700 mt-2">Super plus</div>
          <div className="uppercase my-3 font-bold text-sm text-gray-400">Sales</div>
          <span className="font-bold text-3xl">$25,647</span>
          <span className="bg-red-400 text-white px-3 mx-3 py-1 rounded-full text-sm font-semibold align-text-top">
            +90%
          </span>
        </div>
      </div>
    </div>
  );
}
