
import { useState } from 'react';
import { Heart, Share, ShoppingBag, X } from 'lucide-react';
import { SavedItem } from '../pages/Index';

interface CreatedLookProps {
  items: any[];
  onSaveItem: (item: SavedItem) => void;
  savedItems: SavedItem[];
}

const CreatedLook = ({ items, onSaveItem, savedItems }: CreatedLookProps) => {
  const [item1, item2] = items;
  const [expandedImage, setExpandedImage] = useState<any | null>(null);
  
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

  const handleBuy = () => {
    console.log('Buy button clicked');
    alert('Opening in browser..');
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedImage(null);
    console.log('Created look dismissed');
  };

  const getItemHeight = (item: any) => {
    if (isTopBottom) return '50%';
    if (isDressShoe) {
      return item.category === 'dress' ? '75%' : '25%';
    }
    return '50%';
  };

  // Expanded view for created looks
  if (expandedImage) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col">
        <button 
          onClick={() => setExpandedImage(null)}
          className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        <div className="flex-1 flex items-center justify-center overflow-hidden p-4">
          <div className="w-full max-w-md h-full max-h-96 bg-white rounded-lg overflow-hidden">
            {/* Top Item in expanded view */}
            <div 
              className="relative overflow-hidden"
              style={{ height: getItemHeight(topItem) }}
            >
              <img 
                src={topItem.image} 
                alt={topItem.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-1 left-1 right-1 bg-black/70 backdrop-blur-sm rounded p-1">
                <h4 className="font-medium text-white text-xs truncate">{topItem.name}</h4>
                <p className="text-white/80 text-xs truncate">{topItem.brand}</p>
              </div>
            </div>

            {/* Bottom Item in expanded view */}
            <div 
              className="relative overflow-hidden"
              style={{ height: getItemHeight(bottomItem) }}
            >
              <img 
                src={bottomItem.image} 
                alt={bottomItem.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-1 left-1 right-1 bg-black/70 backdrop-blur-sm rounded p-1">
                <h4 className="font-medium text-white text-xs truncate">{bottomItem.name}</h4>
                <p className="text-white/80 text-xs truncate">{bottomItem.brand}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6">
          <div className="mb-4">
            <h3 className="font-semibold text-lg text-black">Created Look</h3>
            <p className="text-gray-600">{topItem.brand} & {bottomItem.brand}</p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={handleDismiss}
              className="flex-1 flex items-center justify-center gap-2 bg-red-100 text-red-600 py-3 rounded-lg font-medium"
            >
              <X className="w-4 h-4" />
              Dismiss
            </button>
            <button 
              onClick={handleBuy}
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg font-medium"
            >
              <ShoppingBag className="w-4 h-4" />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-none w-64 relative group" style={{ height: '50%' }}>
      <div 
        className="w-full h-full rounded-lg overflow-hidden relative cursor-pointer"
        onClick={() => setExpandedImage(true)}
      >
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
