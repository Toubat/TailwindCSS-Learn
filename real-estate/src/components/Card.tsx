export interface CardItem {
  image: string;
  title: string;
  description: string;
  price?: string;
  badges?: string[];
}

interface CardProps {
  card: CardItem;
  cardName: string;
}

export function Card({ card, cardName }: CardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img className="w-full h-80 object-cover object-center" src={card.image} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{card.title}</div>
        <p className="text-gray-700 text-lg">{card.description}</p>
      </div>
      {card.price && (
        <div className="px-6 pt-4 pb-4">
          <span className="text-green-300 font-bold text-sm inline-block">{card.price}</span>
        </div>
      )}
      {card.badges && (
        <div className="px-6 pt-4 pb-4 space-x-2">
          {card.badges.map((badge: string, idx: number) => (
            <span key={`card-badge-${idx}`} className="badge">
              {badge}
            </span>
          ))}
        </div>
      )}
      <div className="px-6 pt-4 pb-10">
        <button className="badge bg-green-500 text-white font-bold text-base py-2">
          View {cardName}
        </button>
      </div>
    </div>
  );
}
