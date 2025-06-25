
import { useState } from 'react';
import { Heart, Share, ShoppingBag } from 'lucide-react';
import { SavedItem } from '../pages/Index';

interface CreatedLookProps {
  items: any[];
  onSaveItem: (item: SavedItem) => void;
  savedItems: SavedItem[];
}

const CreatedLook = ({ items, onSaveItem, savedItems }: CreatedLookProps) => {
  const [item1, item2] = items;
  
  // Determine layout based on categories
  const isTopBottom = (item1.category === 'top' && item2.category === 'bottom') || 
                     (item1.category === 'bottom' && item2.category === 'top');
  const isDressShoe = (item1.category === 'dress' && item2.category === 'shoe') || 
                      (item1.category === 'shoe' && item2.category === 'dress');

  // Order items for display
  let topItem, bottomItem;
  if (isTopBottom) {
    topItem = item1.category === 'top' ? item1 : item2;
    bottomItem = item1.category === 'bottom' ? item1 : item2;
  } else if (isDressShoe) {
    topItem = item1.category === 'dress' ? item1 : item2;
    bottomItem = item1.category === 'shoe' ? item1 : item2;
  } else {
    topItem = item1;
    bottomItem = item2;
  }

  const isItemSaved = (item: any) => {
    const itemId = `${item.name}-${item.brand}`;
    return savedItems.some(savedItem => savedItem.id === itemId);
  };

  const handleSave = (item: any, e: React.MouseEvent) => {
    e.stopPropagation();
    
    const itemId = `${item.name}-${item.brand}`;
    const itemToSave = {
      id: itemId,
      name: item.name,
      company: item.brand,
      image: item.image,
      buyUrl: '#'
    };
    
    onSaveItem(itemToSave);
  };

  const handleShare = (item: any, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Share clicked for:', item.name);
    alert(`Share functionality for ${item.name}`);
  };

  const getItemHeight = (item: any) => {
    if (isTopBottom) return '50%';
    if (isDressShoe) {
      return item.category === 'dress' ? '75%' : '25%';
    }
    return '50%';
  };

  return (
    <div className="flex-none w-64 relative group" style={{ height: '50%' }}>
      <div className="w-full h-full rounded-lg overflow-hidden relative">
        {/* Top Item */}
        <div 
          className="relative overflow-hidden"
          style={{ height: getItemHeight(topItem) }}
        >
          <img 
            src={topItem.image} 
            alt={topItem.name}
            className="w-full h-full object-cover"
          />
          
          {/* Top item controls */}
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button 
              onClick={(e) => handleShare(topItem, e)}
              className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <Share className="w-3 h-3 text-black" />
            </button>
            <button 
              onClick={(e) => handleSave(topItem, e)}
              className="bg-primary p-1.5 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            >
              <Heart 
                className="w-3 h-3 text-white" 
                fill={isItemSaved(topItem) ? "white" : "none"}
              />
            </button>
          </div>
          
          <div className="absolute bottom-1 left-1 right-1 bg-black/70 backdrop-blur-sm rounded p-1">
            <h4 className="font-medium text-white text-xs truncate">{topItem.name}</h4>
            <p className="text-white/80 text-xs truncate">{topItem.brand}</p>
          </div>
        </div>

        {/* Bottom Item */}
        <div 
          className="relative overflow-hidden"
          style={{ height: getItemHeight(bottomItem) }}
        >
          <img 
            src={bottomItem.image} 
            alt={bottomItem.name}
            className="w-full h-full object-cover"
          />
          
          {/* Bottom item controls */}
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button 
              onClick={(e) => handleShare(bottomItem, e)}
              className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <Share className="w-3 h-3 text-black" />
            </button>
            <button 
              onClick={(e) => handleSave(bottomItem, e)}
              className="bg-primary p-1.5 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            >
              <Heart 
                className="w-3 h-3 text-white" 
                fill={isItemSaved(bottomItem) ? "white" : "none"}
              />
            </button>
          </div>
          
          <div className="absolute bottom-1 left-1 right-1 bg-black/70 backdrop-blur-sm rounded p-1">
            <h4 className="font-medium text-white text-xs truncate">{bottomItem.name}</h4>
            <p className="text-white/80 text-xs truncate">{bottomItem.brand}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatedLook;
