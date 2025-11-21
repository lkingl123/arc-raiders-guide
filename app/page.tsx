'use client';

import { useState, useMemo } from 'react';
import { items } from '@/data/items';
import Image from 'next/image';

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
        return <span className="px-2 md:px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] md:text-xs font-semibold border border-emerald-500/30 whitespace-nowrap">SELL</span>;
      case 'recycle':
        return <span className="px-2 md:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-[10px] md:text-xs font-semibold border border-blue-500/30 whitespace-nowrap">RECYCLE</span>;
      default:
        return <span className="px-2 md:px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-[10px] md:text-xs font-semibold border border-amber-500/30 whitespace-nowrap">KEEP</span>;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-3 md:px-4 py-8 md:py-16">
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-sm md:text-base font-medium">Arc Raiders • 275+ Items</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight px-4">
            Item Guide
          </h1>
          <p className="text-gray-400 text-base md:text-lg px-4 mb-6">
            Search any item to see if you should sell, recycle, or save it
          </p>

          {/* Share Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => {
                const url = 'https://arc-raiders-guide.vercel.app';
                const text = 'Arc Raiders Item Guide - Know what to sell, recycle, or save! 275+ items database';
                window.open(`https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`, '_blank');
              }}
              className="flex items-center gap-2 px-4 py-2.5 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-400 font-medium transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
              <span className="hidden sm:inline">Share on Reddit</span>
              <span className="sm:hidden">Reddit</span>
            </button>

            <button
              onClick={() => {
                const url = 'https://arc-raiders-guide.vercel.app';
                const text = 'Arc Raiders Item Guide - Know what to sell, recycle, or save! 275+ items';
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="flex items-center gap-2 px-4 py-2.5 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 font-medium transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="hidden sm:inline">Share on X</span>
              <span className="sm:hidden">X</span>
            </button>

            <button
              onClick={() => {
                navigator.clipboard.writeText('https://arc-raiders-guide.vercel.app');
                const btn = event?.currentTarget as HTMLButtonElement;
                const originalText = btn.innerHTML;
                btn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span>Copied!</span>';
                setTimeout(() => {
                  btn.innerHTML = originalText;
                }, 2000);
              }}
              className="flex items-center gap-2 px-4 py-2.5 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 font-medium transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">Copy Link</span>
              <span className="sm:hidden">Copy</span>
            </button>
          </div>
        </header>

        <div className="flex gap-6 justify-center">
          {/* Left Sidebar for Ads */}
          <div className="hidden lg:block w-48 flex-shrink-0">
            <div className="sticky top-8">
              {/* Ad Placeholder - Skyscraper */}
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-4 text-center">
                <div className="text-gray-500 text-xs mb-2 font-semibold">Advertisement</div>
                <div className="bg-slate-800/50 rounded-xl h-[600px] w-[160px] mx-auto flex items-center justify-center border border-slate-700/30">
                  <div className="text-gray-600 text-xs rotate-90">
                    <p className="mb-1">Google AdSense</p>
                    <p className="text-[10px]">160x600</p>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Wide Skyscraper
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Centered */}
          <div className="flex-1 max-w-4xl">
            <div className="mb-8 md:mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex items-center">
                  <svg className="absolute left-4 md:left-6 w-5 h-5 md:w-6 md:h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Type item name... (e.g. Rubber Duck, Syringe)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 text-base md:text-lg bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xl"
                    autoFocus
                  />
                </div>
              </div>

              {searchTerm && (
                <div className="mt-3 md:mt-4 text-sm text-gray-500 px-2">
                  <span className="font-medium text-gray-400">{filteredItems.length}</span> {filteredItems.length === 1 ? 'item' : 'items'} found
                </div>
              )}
            </div>

            <div className="space-y-3 md:space-y-4">
              {filteredItems.map((item, index) => {
                const actionType = getActionType(item);
                return (
                  <div
                    key={index}
                    className="group bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-slate-900/80 hover:border-slate-700/50 transition-all duration-200 hover:shadow-2xl active:scale-[0.99] md:hover:scale-[1.01]"
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      {/* Item Image */}
                      <div className="flex-shrink-0">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden border-2 border-slate-700/50 bg-slate-800/50 group-hover:border-blue-500/30 transition-colors">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMUUyOTNiIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY0NzQ4YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPj88L3RleHQ+PC9zdmc+';
                            }}
                          />
                        </div>
                      </div>

                      {/* Item Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2 md:mb-3">
                          <div className="flex-1 min-w-0">
                            <h2 className="text-lg md:text-2xl font-bold text-white mb-1 truncate">{item.name}</h2>
                            <p className="text-gray-400 leading-relaxed text-xs md:text-sm line-clamp-2">{item.condition}</p>
                          </div>
                          <div className="flex-shrink-0">
                            {getActionBadge(actionType)}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 md:gap-3 mt-3 md:mt-4 pt-3 md:pt-4 border-t border-slate-800/50">
                          <div className="bg-slate-950/50 rounded-lg md:rounded-xl p-2 md:p-3 border border-slate-800/30">
                            <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Sell Price</div>
                            <div className="text-base md:text-xl font-bold text-emerald-400">
                              {item.sellPrice === '-' ? (
                                <span className="text-gray-600 text-sm md:text-base">N/A</span>
                              ) : (
                                `$${item.sellPrice}`
                              )}
                            </div>
                          </div>
                          <div className="bg-slate-950/50 rounded-lg md:rounded-xl p-2 md:p-3 border border-slate-800/30">
                            <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Recycles Into</div>
                            <div className="text-xs md:text-sm font-medium text-blue-400 leading-relaxed line-clamp-2">
                              {item.recycles === '-' ? (
                                <span className="text-gray-600">Nothing</span>
                              ) : (
                                item.recycles
                              )}
                            </div>
                          </div>
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
                <p className="text-gray-600 text-sm mt-2">275+ items in the database</p>
              </div>
            )}
          </div>

          {/* Right Sidebar for Ads */}
          <div className="hidden lg:block w-48 flex-shrink-0">
            <div className="sticky top-8">
              {/* Ad Placeholder - Skyscraper */}
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-4 text-center">
                <div className="text-gray-500 text-xs mb-2 font-semibold">Advertisement</div>
                <div className="bg-slate-800/50 rounded-xl h-[600px] w-[160px] mx-auto flex items-center justify-center border border-slate-700/30">
                  <div className="text-gray-600 text-xs rotate-90">
                    <p className="mb-1">Google AdSense</p>
                    <p className="text-[10px]">160x600</p>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  Wide Skyscraper
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
