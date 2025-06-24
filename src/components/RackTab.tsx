
import { useState } from 'react';
import { SavedItem } from '../pages/Index';
import SavedItemOverlay from './SavedItemOverlay';

interface RackTabProps {
  savedItems: SavedItem[];
  onRemoveItem: (itemId: string) => void;
}

const RackTab = ({ savedItems, onRemoveItem }: RackTabProps) => {
  const [selectedItem, setSelectedItem] = useState<SavedItem | null>(null);

  const handleItemClick = (item: SavedItem) => {
    setSelectedItem(item);
  };

  const handleCloseOverlay = () => {
    setSelectedItem(null);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div>
          <h2 className="text-xl font-semibold mb-6 text-black">Saved Items</h2>
          
          {savedItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              <p>No saved items yet</p>
              <p className="text-sm mt-2">Save items from Explore to see them here</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {savedItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-sm border cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleItemClick(item)}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-medium text-sm text-black truncate">{item.name}</h3>
                    <p className="text-xs text-gray-600 truncate">{item.company}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedItem && (
        <SavedItemOverlay 
          selectedItem={selectedItem}
          onClose={handleCloseOverlay}
          onRemoveItem={onRemoveItem}
        />
      )}
    </div>
  );
};

export default RackTab;
