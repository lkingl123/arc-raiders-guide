import { Item } from '@/data/items';

interface ItemCardProps {
  item: Item;
}

const rarityColors = {
  Common: 'bg-gray-500',
  Uncommon: 'bg-green-500',
  Rare: 'bg-blue-500',
  Epic: 'bg-purple-500',
  Legendary: 'bg-orange-500',
};

const categoryColors = {
  'Keep for Quests': 'border-green-500 bg-green-500/10',
  'Upgrading Benches': 'border-blue-500 bg-blue-500/10',
  'Safely Recycle': 'border-gray-500 bg-gray-500/10',
};

export default function ItemCard({ item }: ItemCardProps) {
  const categoryClass = categoryColors[item.category] || 'border-gray-500';
  const rarityClass = rarityColors[item.rarity || 'Common'] || 'bg-gray-500';

  return (
    <div className={`border-2 ${categoryClass} rounded-lg p-4 hover:scale-105 transition-transform duration-200`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
        {item.rarity && (
          <span className={`${rarityClass} text-xs px-2 py-1 rounded text-white`}>
            {item.rarity}
          </span>
        )}
      </div>

      <div className="space-y-1 text-sm">
        <p className="text-gray-300 font-medium">{item.category}</p>
        {item.subcategory && (
          <p className="text-gray-400 text-xs">{item.subcategory}</p>
        )}
        {item.description && (
          <p className="text-gray-400 text-xs mt-2 italic">{item.description}</p>
        )}
      </div>
    </div>
  );
}
