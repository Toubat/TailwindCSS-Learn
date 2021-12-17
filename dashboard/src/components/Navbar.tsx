export function Navbar() {
  return (
    <div className="bg-white px-2 py-0.5 h-18 flex">
      <div className="flex p-3">
        <div className="bg-blue-500 w-10 h-10 rounded-full flex justify-center items-center">
          <div className="font-semibold text-white text-xl">B</div>
        </div>
        <span className="block p-2">Brian Yin</span>
      </div>
      <div className="flex items-center flex-grow justify-end space-x-2 mr-2">
        <div className="bg-yellow-200 w-7 h-7 rounded-full"></div>
        <div className="bg-red-400 w-7 h-7 rounded-full"></div>
        <div className="bg-green-400 w-7 h-7 rounded-full"></div>
        <div className="text-blue-500 text-semibold pl-2">Logout</div>
      </div>
    </div>
  );
}
