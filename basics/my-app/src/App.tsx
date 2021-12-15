import React from "react";

function App() {
  return (
    <div className="h-[3000px]">
      <div className="flex bg-yellow-500 w-auto">
        <div className="h-10 w-80 bg-red-500">1</div>
        <div className="h-10 w-80 bg-blue-500">1</div>
        <div className="h-10 w-80 bg-green-500">1</div>
      </div>
      <div className="h-4"></div>
      <div className="bg-gray-200 w-auto grid grid-cols-3 gap-4">
        <div className="h-20 bg-red-500 col-span-2">1</div>
        <div className="h-20 bg-red-500">2</div>
        <div className="h-20 bg-red-500">3</div>

        <div className="h-20 bg-red-500">4</div>
        <div className="h-20 bg-red-500">5</div>
        <div className="h-20 bg-red-500">6</div>

        <div className="h-20 bg-red-500">7</div>
        <div className="h-20 bg-red-500">8</div>
        <div className="h-20 bg-red-500">9</div>
      </div>
      <div className="h-4"></div>
      <div className="bg-gray-200 w-auto grid grid-cols-5 grid-flow-row gap-x-2 gap-y-4 justify-items-center">
        <div className="h-20 w-20 bg-red-500 justify-self-end">1</div>
        <div className="h-20 w-20 bg-red-500">2</div>
        <div className="h-20 w-20 bg-red-500 justify-self-start">3</div>

        <div className="h-20 w-20 bg-red-500">4</div>
        <div className="h-20 w-20 bg-red-500">5</div>
        <div className="h-20 w-20 bg-red-500">6</div>

        <div className="h-20 bg-red-500 justify-self-stretch">7</div>
        <div className="h-20 w-20 bg-red-500">8</div>
        <div className="h-20 w-20 bg-red-500">9</div>
      </div>
      <div className="h-4"></div>
      <div className="bg-blue-500 p-10">
        <div className="text-4xl font-medium text-center normal-case text-green-500">
          This is the inner div
        </div>
      </div>
      <div className="h-4"></div>
      <div className="bg-gray-100 p-6 w-full flex justify-center items-center flex-col">
        <button className="bg-green-500 p-3 text-white rounded-md border-4 border-white border-opacity-50 border-dashed drop-shadow-xl">
          Click here
        </button>
        <button className="btn">Click here</button>
        <button className="btn" draggable={true}>
          Click here
        </button>
        <input
          type="text"
          placeholder="Add name"
          className="mt-10 bg-gray-200 focus:bg-green-500"
        />
      </div>
      <div className="h-4"></div>
      <div>
        <h1 className="2xl:text-pink-500 xl:text-yellow-500 lg:text-red-500 md:text-green-500 2xl:text-8xl xl:text-4xl lg:text-xl md:text-lg">
          Heading
        </h1>
        <div className="bg-red-500 group">
          <p className="group-hover:text-white">Para 1</p>
          <p className="text-green-500">Para 2</p>
          <a href="">Click Here</a>
        </div>
      </div>
    </div>
  );
}

export default App;
