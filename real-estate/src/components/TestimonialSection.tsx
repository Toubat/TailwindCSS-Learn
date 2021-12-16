import { TestimonialItem, Testimonial } from "./Testimonial";

const testimonials: TestimonialItem[] = [
  {
    quote:
      "This is one of the best property websites I have ever used. Kudos to Prime Properties and the team.",
    name: "Brian Yin",
    profession: "Real Estate Agent",
  },
  {
    quote:
      "This is one of the best property websites I have ever used. Kudos to Prime Properties and the team.",
    name: "Brian Yin",
    profession: "Director of Optimum Solutions",
  },
  {
    quote:
      "This is one of the best property websites I have ever used. Kudos to Prime Properties and the team.",
    name: "Brian Yin",
    profession: "Software Engineer",
  },
];

export function TestimonialSection() {
  return (
    <div className="p-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((item: TestimonialItem) => (
        <Testimonial key={item.name} item={item} />
      ))}
    </div>
  );
}
