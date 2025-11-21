'use client';

import { useState, useMemo } from 'react';
import { items, Item } from '@/data/items';
import ItemCard from '@/components/ItemCard';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'rarity' | 'category'>('name');

  const filteredItems = useMemo(() => {
    let filtered = items.filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.subcategory?.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.description?.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesRarity = selectedRarity === 'all' || item.rarity === selectedRarity;

      return matchesSearch && matchesCategory && matchesRarity;
    });

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      } else if (sortBy === 'rarity') {
        const rarityOrder = { 'Common': 1, 'Uncommon': 2, 'Rare': 3, 'Epic': 4, 'Legendary': 5 };
        return (rarityOrder[a.rarity || 'Common'] || 0) - (rarityOrder[b.rarity || 'Common'] || 0);
      }
      return 0;
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedRarity, sortBy]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Arc Raiders Item Guide
          </h1>
          <p className="text-gray-300 text-lg">
            Know what to keep for quests, use for upgrades, or safely recycle
          </p>
        </header>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <FilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedRarity={selectedRarity}
          setSelectedRarity={setSelectedRarity}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <div className="mb-4 text-gray-400 text-center">
          Found {filteredItems.length} items
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-xl">No items found</p>
            <p className="mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </main>
  );
}
