import home1 from "../images/home1.jpg";
import home2 from "../images/home2.jpg";
import home3 from "../images/home3.jpg";
import { CardItem, Card } from "./Card";

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adip, sed diam nonum vul putate eu.`;

const cards: CardItem[] = [
  {
    image: home1,
    title: "Orchid Villa",
    description: text,
    price: "$ 4,50,0000",
    badges: ["7 Beds", "7 Paths"],
  },
  {
    image: home2,
    title: "577 Gracia",
    description: text,
    price: "$ 4,50,0000",
    badges: ["7 Beds", "7 Paths"],
  },
  {
    image: home3,
    title: "Nexa Epitome",
    description: text,
    price: "$ 4,50,0000",
    badges: ["7 Beds", "7 Paths"],
  },
];

export function PropertySection() {
  return (
    <div className="grid px-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20 gap-5">
      {cards.map((card: CardItem, idx: number) => (
        <Card card={card} key={`card-${idx}`} cardName="Property" />
      ))}
    </div>
  );
}
