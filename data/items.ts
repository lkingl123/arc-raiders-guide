export interface Item {
  id: string;
  name: string;
  category: 'Keep for Quests' | 'Upgrading Benches' | 'Safely Recycle';
  subcategory?: string;
  description?: string;
  rarity?: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
}

export const items: Item[] = [
  // Keep for Quests
  { id: '1', name: 'Culmark Excl', category: 'Keep for Quests', rarity: 'Rare', description: 'Required by Mama Pam' },
  { id: '2', name: 'SR Ranch Spartan', category: 'Keep for Quests', rarity: 'Rare', description: 'Required by The Tribocs, Villain and Humans' },
  { id: '3', name: 'Universal Order', category: 'Keep for Quests', rarity: 'Rare', description: 'Required by Everywhere By Everyone' },
  { id: '4', name: 'Weapon Parts', category: 'Keep for Quests', rarity: 'Common', description: 'Universal weapon components' },

  // Upgrading Benches
  { id: '100', name: 'Syringe', category: 'Upgrading Benches', rarity: 'Common' },
  { id: '101', name: 'Bandage', category: 'Upgrading Benches', rarity: 'Common' },
  { id: '102', name: 'Medical Supplies', category: 'Upgrading Benches', rarity: 'Uncommon' },
  { id: '103', name: 'Electronics', category: 'Upgrading Benches', rarity: 'Uncommon' },
  { id: '104', name: 'Circuit Board', category: 'Upgrading Benches', rarity: 'Uncommon' },
  { id: '105', name: 'Mechanical Parts', category: 'Upgrading Benches', rarity: 'Common' },
  { id: '106', name: 'Metal Scrap', category: 'Upgrading Benches', rarity: 'Common' },
  { id: '107', name: 'Plastic', category: 'Upgrading Benches', rarity: 'Common' },
  { id: '108', name: 'Rubber', category: 'Upgrading Benches', rarity: 'Common' },
  { id: '109', name: 'Fabric', category: 'Upgrading Benches', rarity: 'Common' },
  { id: '110', name: 'Copper Wire', category: 'Upgrading Benches', rarity: 'Uncommon' },
  { id: '111', name: 'Steel Plate', category: 'Upgrading Benches', rarity: 'Uncommon' },

  // Safely Recycle - Weapons
  { id: '200', name: 'Pistol', category: 'Safely Recycle', subcategory: 'Weapons', rarity: 'Common' },
  { id: '201', name: 'Shotgun', category: 'Safely Recycle', subcategory: 'Weapons', rarity: 'Common' },
  { id: '202', name: 'Rifle', category: 'Safely Recycle', subcategory: 'Weapons', rarity: 'Common' },
  { id: '203', name: 'SMG', category: 'Safely Recycle', subcategory: 'Weapons', rarity: 'Uncommon' },
  { id: '204', name: 'Sniper Rifle', category: 'Safely Recycle', subcategory: 'Weapons', rarity: 'Rare' },

  // Safely Recycle - Armor
  { id: '210', name: 'Light Armor', category: 'Safely Recycle', subcategory: 'Armor', rarity: 'Common' },
  { id: '211', name: 'Medium Armor', category: 'Safely Recycle', subcategory: 'Armor', rarity: 'Uncommon' },
  { id: '212', name: 'Heavy Armor', category: 'Safely Recycle', subcategory: 'Armor', rarity: 'Rare' },
  { id: '213', name: 'Helmet', category: 'Safely Recycle', subcategory: 'Armor', rarity: 'Common' },
  { id: '214', name: 'Vest', category: 'Safely Recycle', subcategory: 'Armor', rarity: 'Common' },

  // Safely Recycle - Consumables
  { id: '220', name: 'Health Pack', category: 'Safely Recycle', subcategory: 'Consumables', rarity: 'Common' },
  { id: '221', name: 'Energy Drink', category: 'Safely Recycle', subcategory: 'Consumables', rarity: 'Common' },
  { id: '222', name: 'Food Ration', category: 'Safely Recycle', subcategory: 'Consumables', rarity: 'Common' },
  { id: '223', name: 'Water Bottle', category: 'Safely Recycle', subcategory: 'Consumables', rarity: 'Common' },

  // Safely Recycle - Materials
  { id: '230', name: 'Wood', category: 'Safely Recycle', subcategory: 'Materials', rarity: 'Common' },
  { id: '231', name: 'Stone', category: 'Safely Recycle', subcategory: 'Materials', rarity: 'Common' },
  { id: '232', name: 'Iron Ore', category: 'Safely Recycle', subcategory: 'Materials', rarity: 'Uncommon' },
  { id: '233', name: 'Aluminum', category: 'Safely Recycle', subcategory: 'Materials', rarity: 'Uncommon' },
  { id: '234', name: 'Titanium', category: 'Safely Recycle', subcategory: 'Materials', rarity: 'Rare' },
  { id: '235', name: 'Glass', category: 'Safely Recycle', subcategory: 'Materials', rarity: 'Common' },
  { id: '236', name: 'Ceramic', category: 'Safely Recycle', subcategory: 'Materials', rarity: 'Uncommon' },

  // Safely Recycle - Misc
  { id: '240', name: 'Battery', category: 'Safely Recycle', subcategory: 'Misc', rarity: 'Common' },
  { id: '241', name: 'Light Bulb', category: 'Safely Recycle', subcategory: 'Misc', rarity: 'Common' },
  { id: '242', name: 'Tool Kit', category: 'Safely Recycle', subcategory: 'Misc', rarity: 'Uncommon' },
  { id: '243', name: 'Rope', category: 'Safely Recycle', subcategory: 'Misc', rarity: 'Common' },
  { id: '244', name: 'Tape', category: 'Safely Recycle', subcategory: 'Misc', rarity: 'Common' },
  { id: '245', name: 'Glue', category: 'Safely Recycle', subcategory: 'Misc', rarity: 'Common' },
  { id: '246', name: 'Nails', category: 'Safely Recycle', subcategory: 'Misc', rarity: 'Common' },
  { id: '247', name: 'Screws', category: 'Safely Recycle', subcategory: 'Misc', rarity: 'Common' },
  { id: '248', name: 'Bolts', category: 'Safely Recycle', subcategory: 'Misc', rarity: 'Common' },
  { id: '249', name: 'Spring', category: 'Safely Recycle', subcategory: 'Misc', rarity: 'Uncommon' },
  { id: '250', name: 'Gear', category: 'Safely Recycle', subcategory: 'Misc', rarity: 'Uncommon' },
];
