import home1 from "../images/newyork.jpg";
import home2 from "../images/california.jpg";
import home3 from "../images/chicago.jpg";
import { CardItem, Card } from "./Card";

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adip, sed diam nonum vul putate eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adip, sed diam nonum vul putate eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adip, sed diam nonum vul putate eu.`;

const cards: CardItem[] = [
  {
    image: home1,
    title: "New York",
    description: text,
  },
  {
    image: home2,
    title: "San Francisco",
    description: text,
  },
  {
    image: home3,
    title: "Chicago",
    description: text,
  },
];

export function LocationSection() {
  return (
    <div className="grid px-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20 gap-5">
      {cards.map((card: CardItem, idx: number) => (
        <Card card={card} key={`card-${idx}`} cardName="Location" />
      ))}
    </div>
  );
}
