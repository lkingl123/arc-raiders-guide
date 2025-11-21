interface FilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedRarity: string;
  setSelectedRarity: (rarity: string) => void;
  sortBy: 'name' | 'rarity' | 'category';
  setSortBy: (sort: 'name' | 'rarity' | 'category') => void;
}

export default function FilterBar({
  selectedCategory,
  setSelectedCategory,
  selectedRarity,
  setSelectedRarity,
  sortBy,
  setSortBy,
}: FilterBarProps) {
  return (
    <div className="mb-8 bg-slate-800 rounded-lg p-6 border border-slate-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="Keep for Quests">Keep for Quests</option>
            <option value="Upgrading Benches">Upgrading Benches</option>
            <option value="Safely Recycle">Safely Recycle</option>
          </select>
        </div>

        {/* Rarity Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Rarity
          </label>
          <select
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Rarities</option>
            <option value="Common">Common</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Rare">Rare</option>
            <option value="Epic">Epic</option>
            <option value="Legendary">Legendary</option>
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'name' | 'rarity' | 'category')}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          >
            <option value="name">Name</option>
            <option value="category">Category</option>
            <option value="rarity">Rarity</option>
          </select>
        </div>
      </div>

      {/* Quick Category Buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory('Keep for Quests')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedCategory === 'Keep for Quests'
              ? 'bg-green-600 text-white'
              : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
          }`}
        >
          Keep for Quests
        </button>
        <button
          onClick={() => setSelectedCategory('Upgrading Benches')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedCategory === 'Upgrading Benches'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
          }`}
        >
          Upgrading Benches
        </button>
        <button
          onClick={() => setSelectedCategory('Safely Recycle')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedCategory === 'Safely Recycle'
              ? 'bg-gray-600 text-white'
              : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
          }`}
        >
          Safely Recycle
        </button>
      </div>
    </div>
  );
}
