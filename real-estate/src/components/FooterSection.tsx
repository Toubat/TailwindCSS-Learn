/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import house from "../images/house.png";

interface Section {
  title: string;
  fields: string[];
}

const sections: Section[] = [
  { title: "Product", fields: ["Features", "Integrations", "Pricing", "FAQ"] },
  { title: "Company", fields: ["privacy", "Terms of Service"] },
  { title: "Developers", fields: ["Public API", "Documentation", "Guides"] },
  { title: "Social Media", fields: ["Facebook", "Twitter", "Instagram"] },
];

export function FooterSection() {
  return (
    <footer className="pt-16 px-4 ">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col justify-between mx-auto space-y-8 mb-16 lg:1/3 items-center">
          <div>
            <a href="" className="flex items-center justify-center">
              <div className="flex w-12 mr-2">
                <img className="w-10 h-10" src={house} alt="" />
              </div>
              <span className="font-semibold text-gray-500 text-3xl">Prime Properties</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:w-2/3">
          {sections.map((section) => (
            <div className="space-y-3 text=sm mx-auto">
              <h3 className="uppercase text-green-500 tracking-wide text-lg font-medium">
                {section.title}
              </h3>
              {
                <ul className="space-y-1">
                  {section.fields.map((field) => (
                    <li>
                      <a href="">{field}</a>
                    </li>
                  ))}
                </ul>
              }
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-green-500 text-sm py-6 border-t-2 mt-6">
        <div>@ 1968 COmpany Co. All rights reserved.</div>
      </div>
    </footer>
  );
}
