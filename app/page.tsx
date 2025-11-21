'use client';

import { useState, useMemo } from 'react';
import { items } from '@/data/items';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return [];

    return items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">
            Arc Raiders Item Guide
          </h1>
          <p className="text-gray-400">
            Search an item to know what to do with it
          </p>
        </header>

        <input
          type="text"
          placeholder="Search for an item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 text-lg bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors mb-8"
          autoFocus
        />

        {searchTerm && (
          <div className="text-sm text-gray-500 mb-4">
            {filteredItems.length} {filteredItems.length === 1 ? 'result' : 'results'} found
          </div>
        )}

        <div className="space-y-3">
          {filteredItems.map((item, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
              <div className="mb-3">
                <h2 className="text-xl font-semibold text-white mb-1">{item.name}</h2>
                <p className="text-gray-300">{item.condition}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Sell Price:</span>
                  <span className="ml-2 text-green-400 font-medium">
                    {item.sellPrice === '-' ? 'N/A' : `$${item.sellPrice}`}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Recycles Into:</span>
                  <span className="ml-2 text-blue-400">
                    {item.recycles === '-' ? 'Nothing' : item.recycles}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {searchTerm && filteredItems.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No items found matching "{searchTerm}"</p>
          </div>
        )}

        {!searchTerm && (
          <div className="text-center py-12 text-gray-600">
            <p>Type an item name to get started</p>
          </div>
        )}
      </div>
    </main>
  );
}
