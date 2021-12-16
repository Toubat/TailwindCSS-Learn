/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import avatar from "../images/avatar.png";

export interface TestimonialItem {
  quote: string;
  name: string;
  profession: string;
}

export interface TestimonialProps {
  item: TestimonialItem;
}

export function Testimonial({ item }: TestimonialProps) {
  return (
    <div className="shadow-lg bg-white rounded-xl p-4 w-72 mx-auto">
      <p className="text-gray-600">
        <span className="text-green-500 text-xl font-bold">"</span>
        <span className="text-md">{item.quote}</span>
        <span className="text-green-500 text-xl font-bold">"</span>
      </p>
      <div className="flex bg-green-100 rounded-full items-center mt-4">
        <a href="" className="block relative">
          <img src={avatar} alt="" className="h-10 w-10 rounded-full mx-auto" />
        </a>
        <div className="flex flex-col ml-2 justify-between">
          <span className="text-sm text-green-500 font-semibold">{item.name}</span>
          <span className="text-xs flex items-center">{item.profession}</span>
        </div>
      </div>
    </div>
  );
}
