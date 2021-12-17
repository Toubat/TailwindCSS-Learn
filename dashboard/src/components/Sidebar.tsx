const tabs: string[] = [
  "Dashboard",
  "Customers",
  "Orders",
  "Campaigns",
  "Messages",
  "Apps",
  "Settings",
];

export function Sidebar() {
  return (
    <div className="bg-indigo-900 w-56 h-screen">
      <div className="bg-indigo-800">
        <div className="uppercase text-gray-200 p-5 font-bold text-xl">Super Corp</div>
      </div>
      <div>
        <div className="p-5 text-gray-200 uppercase font-bold text-sm">Pages</div>
      </div>
      {tabs.map((tab, index) => (
        <div key={index} className="flex m-5 mt-2">
          <div className="bg-yellow-200 w-5 h-5 rounded-full"></div>
          <div className="mx-3 text-sm text-gray-100">{tab}</div>
        </div>
      ))}
    </div>
  );
}
