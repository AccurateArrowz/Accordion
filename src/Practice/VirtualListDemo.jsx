import React, { useState } from 'react';
import VirtualList from './VirtualList';

const VirtualListDemo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Generate sample data
  const generateItems = (count) => {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      name: `Item ${index + 1}`,
      description: `This is the description for item ${index + 1}`,
      category: ['Work', 'Personal', 'Important', 'Archive'][index % 4],
      timestamp: new Date(Date.now() - index * 1000000).toLocaleDateString()
    }));
  };

  const [items] = useState(() => generateItems(10000));
  
  // Filter items based on search
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderItem = (item, index) => (
    <div className="flex items-center gap-3 w-full">
      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
        {index + 1}
      </div>
      <div className="flex-1">
        <div className="text-sm text-gray-900 font-medium">{item.name}</div>
        <div className="text-xs text-gray-600">{item.description}</div>
      </div>
      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
        {item.category}
      </div>
      <div className="text-xs text-gray-400">
        {item.timestamp}
      </div>
    </div>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Virtual List Demo</h1>
        <p className="text-gray-600 mb-4">
          This virtual list efficiently renders 10,000 items by only showing what's visible.
          Try scrolling and searching to see the performance!
        </p>
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="text-sm text-gray-500 mt-1">
            Found {filteredItems.length} items
          </div>
        </div>
      </div>

      <VirtualList
        items={filteredItems}
        itemHeight={70}
        containerHeight={500}
        renderItem={renderItem}
        overscan={10}
      />

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">How Virtual Lists Work:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Only renders visible items + overscan buffer</li>
          <li>• Uses absolute positioning to create scrollable area</li>
          <li>• Recycles DOM elements as you scroll</li>
          <li>• Handles thousands of items efficiently</li>
        </ul>
      </div>
    </div>
  );
};

export default VirtualListDemo;
