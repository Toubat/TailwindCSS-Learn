import { useState, useRef, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
  { id: 6, name: "Durward Reynolds" },
  { id: 7, name: "Kenton Towne" },
  { id: 8, name: "Therese Wunsch" },
  { id: 9, name: "Benedict Kessler" },
  { id: 10, name: "Katelyn Rohan" },
  { id: 11, name: "Durward Reynolds" },
  { id: 12, name: "Kenton Towne" },
  { id: 13, name: "Therese Wunsch" },
  { id: 14, name: "Benedict Kessler" },
  { id: 15, name: "Kate" },
];

function Example() {
  const [selectedPerson, setSelectedPerson] = useState(people[3]);
  const [personName, setPersonName] = useState("");
  const inputRef = useRef();

  return (
    <Listbox
      as="div"
      value={selectedPerson}
      onChange={setSelectedPerson}
      className="max-w-xs inline-block"
    >
      {({ open }) => (
        <div className="relative flex justify-center">
          <Listbox.Button
            className="pl-3 pr-2 bg-white border border-gray-300 font-semibold transition hover:bg-blue-600 hover:text-white
            rounded-md shadow-sm py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <div
              className="flex items-center justify-between w-full space-x-2 "
              onClick={() => setTimeout(() => inputRef.current.focus(), 200)}
            >
              <span className="inline-block">{selectedPerson.name}</span>
              <SelectorIcon className="inline-block h-5 w-5" aria-hidden="true" />
            </div>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className={`${open ? "block" : "block"}
              transform top-full
              absolute w-fit py-1 mt-1 text-base bg-white
              rounded-md shadow-lg ring-1 ring-black ring-opacity-5
              focus:outline-none sm:text-sm`}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className="px-2 py-1 transition border-2 border-gray-500 bg-gray-200
                rounded-md text-sm text-gray-700 mx-2 my-2 focus:ring-2 outline-indigo-300"
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
              />
              <div className="h-56 overflow-y-auto">
                {people
                  .filter((person) => person.name.toLowerCase().includes(personName.toLowerCase()))
                  .map((person, idx) => (
                    <Listbox.Option
                      key={idx}
                      value={person}
                      className={({ active, selected }) =>
                        `${selected ? "bg-blue-200" : active ? "bg-gray-300" : ""}
                        mx-2 px-2 py-1 my-1 cursor-pointer hover:bg-gray-100 rounded-md text-center transition outline-none`
                      }
                    >
                      {person.name}
                    </Listbox.Option>
                  ))}
              </div>
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}

export default Example;
