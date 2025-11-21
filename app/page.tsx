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

  const getActionType = (item: any) => {
    const condition = item.condition.toLowerCase();
    if (condition.includes('safe to sell')) return 'sell';
    if (condition.includes('safe to recycle')) return 'recycle';
    return 'conditional';
  };

  const getActionBadge = (type: string) => {
    switch (type) {
      case 'sell':
        return <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/30">SELL</span>;
      case 'recycle':
        return <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/30">RECYCLE</span>;
      default:
        return <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-semibold border border-amber-500/30">CONDITIONAL</span>;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative max-w-4xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-sm font-medium">Arc Raiders</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Item Guide
          </h1>
          <p className="text-gray-400 text-lg">
            Search any item to see if you should sell, recycle, or save it
          </p>
        </header>

        <div className="mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative flex items-center">
              <svg className="absolute left-6 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Type item name... (e.g. Rubber Duck, Syringe)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-5 text-lg bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xl"
                autoFocus
              />
            </div>
          </div>

          {searchTerm && (
            <div className="mt-4 text-sm text-gray-500 px-2">
              <span className="font-medium text-gray-400">{filteredItems.length}</span> {filteredItems.length === 1 ? 'item' : 'items'} found
            </div>
          )}
        </div>

        <div className="space-y-4">
          {filteredItems.map((item, index) => {
            const actionType = getActionType(item);
            return (
              <div
                key={index}
                className="group bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:bg-slate-900/80 hover:border-slate-700/50 transition-all duration-200 hover:shadow-2xl hover:scale-[1.01]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">{item.name}</h2>
                    <p className="text-gray-400 leading-relaxed">{item.condition}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {getActionBadge(actionType)}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-800/50">
                  <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/30">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">Sell Price</div>
                    <div className="text-2xl font-bold text-emerald-400">
                      {item.sellPrice === '-' ? (
                        <span className="text-gray-600 text-lg">N/A</span>
                      ) : (
                        `$${item.sellPrice}`
                      )}
                    </div>
                  </div>
                  <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/30">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">Recycles Into</div>
                    <div className="text-sm font-medium text-blue-400 leading-relaxed">
                      {item.recycles === '-' ? (
                        <span className="text-gray-600">Nothing</span>
                      ) : (
                        item.recycles
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {searchTerm && filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-4 bg-slate-900/60 rounded-2xl mb-4">
              <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">No items found matching <span className="text-white font-medium">"{searchTerm}"</span></p>
            <p className="text-gray-600 text-sm mt-2">Try checking the spelling or search for a different item</p>
          </div>
        )}

        {!searchTerm && (
          <div className="text-center py-20">
            <div className="inline-block p-4 bg-slate-900/40 rounded-2xl mb-4">
              <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">Start typing to search for items</p>
            <p className="text-gray-600 text-sm mt-2">135+ items in the database</p>
          </div>
        )}
      </div>
    </main>
  );
}
