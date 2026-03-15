import React, { useState, useEffect, useRef, useMemo } from 'react';

const VirtualList = ({
  items = [],
  itemHeight = 50,
  containerHeight = 400,
  renderItem,
  overscan = 5
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  const visibleItems = useMemo(() => {
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(
      items.length - 1,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
    );

    return items.slice(startIndex, endIndex + 1).map((item, index) => ({
      item,
      index: startIndex + index
    }));
  }, [items, scrollTop, itemHeight, containerHeight, overscan]);

  const totalHeight = items.length * itemHeight;

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white shadow-lg">
      <div 
        ref={containerRef} 
        onScroll={handleScroll}
        className="h-96 overflow-y-auto relative"
        style={{ height: `${containerHeight}px` }}
      >
        <div style={{ height: totalHeight, position: 'relative' }}>
          {visibleItems.map(({ item, index }) => (
            <div
              key={index}
              className="border-b border-gray-100 flex items-center px-4 box-border transition-colors duration-200 hover:bg-gray-50 even:bg-gray-50 even:hover:bg-gray-100"
              style={{
                position: 'absolute',
                top: index * itemHeight,
                height: itemHeight,
                width: '100%'
              }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
      <div className="py-3 px-4 bg-gray-50 border-t border-gray-300 text-xs text-gray-600 font-mono">
        Total items: {items.length} | Visible: {visibleItems.length}
      </div>
    </div>
  );
};

export default VirtualList;
