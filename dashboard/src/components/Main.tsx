import { Navbar } from "./Navbar";
import { Bar, Line } from "react-chartjs-2";
import faker from "faker";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

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
            <Bar options={options} data={data} />
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
          <Bar options={options} data={data} />
        </div>
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
            <Bar options={options} data={data} />
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
          <Bar options={options} data={data} />
        </div>
      </div>
      <div className="m-7 flex space-x-6">
        <div className="left w-1/3 p-4 bg-white divide-y divide-gray-200">
          <div className="font-bold pb-4">Top Countries</div>
          <Bar options={options} data={data} />
        </div>
        <div className="right w-2/3 p-4 bg-white">
          <div className="font-bold pb-4">Top Channels</div>
          <div className="flex bg-gray-100 p-2 uppercase font-bold text-gray-500">
            <div className="w-1/4">
              <div>Source</div>
            </div>
            <div className="w-3/4 flex space-x-14">
              <div>Visitors</div>
              <div>Revenues</div>
              <div>Sales</div>
              <div>Conversion</div>
            </div>
          </div>
          <div className="multi-channel-container divide-y divide-gray-200">
            <div className="single-channel py-2">
              <div className="flex">
                <div className="w-1/4">
                  <div className="flex">
                    <div className="bg-yellow-400 w-8 h-8 rounded-full"></div>
                    <div className="pl-2 my-auto">Youtube</div>
                  </div>
                </div>
                <div className="w-3/4 flex space-x-16">
                  <div>2.4k</div>
                  <div className="text-green-500">$16,000</div>
                  <div>340</div>
                  <div className="text-blue-500">4.9%</div>
                </div>
              </div>
            </div>
            <div className="single-channel py-2">
              <div className="flex">
                <div className="w-1/4">
                  <div className="flex">
                    <div className="bg-yellow-400 w-8 h-8 rounded-full"></div>
                    <div className="pl-2 my-auto">Youtube</div>
                  </div>
                </div>
                <div className="w-3/4 flex space-x-16">
                  <div>2.4k</div>
                  <div className="text-green-500">$16,000</div>
                  <div>340</div>
                  <div className="text-blue-500">4.9%</div>
                </div>
              </div>
            </div>
            <div className="single-channel py-2">
              <div className="flex">
                <div className="w-1/4">
                  <div className="flex">
                    <div className="bg-yellow-400 w-8 h-8 rounded-full"></div>
                    <div className="pl-2 my-auto">Youtube</div>
                  </div>
                </div>
                <div className="w-3/4 flex space-x-16">
                  <div>2.4k</div>
                  <div className="text-green-500">$16,000</div>
                  <div>340</div>
                  <div className="text-blue-500">4.9%</div>
                </div>
              </div>
            </div>
            <div className="single-channel py-2">
              <div className="flex">
                <div className="w-1/4">
                  <div className="flex">
                    <div className="bg-yellow-400 w-8 h-8 rounded-full"></div>
                    <div className="pl-2 my-auto">Youtube</div>
                  </div>
                </div>
                <div className="w-3/4 flex space-x-16">
                  <div>2.4k</div>
                  <div className="text-green-500">$16,000</div>
                  <div>340</div>
                  <div className="text-blue-500">4.9%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
