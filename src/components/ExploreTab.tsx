
import ImageCarousel from './ImageCarousel';
import CategorySection from './CategorySection';
import { SavedItem } from '../pages/Index';

interface ExploreTabProps {
  onSaveItem: (item: SavedItem) => void;
  savedItems: SavedItem[];
  onOverlayChange?: (isOpen: boolean) => void;
  onExpandedViewChange?: (isOpen: boolean) => void;
  createdLooks: any[][];
  onCreateLook: (items: any[]) => void;
}

const ExploreTab = ({ 
  onSaveItem, 
  savedItems, 
  onOverlayChange, 
  onExpandedViewChange,
  createdLooks,
  onCreateLook 
}: ExploreTabProps) => {
  const handleOverlayChange = (isOpen: boolean) => {
    onOverlayChange?.(isOpen);
  };

  // Filter saved items that have categories (these are added items)
  const addedItems = savedItems.filter(item => 'category' in item);

  return (
    <div className="h-full flex flex-col">
      <div className="h-1/2 flex flex-col">
        <div className="px-4 py-2 bg-white border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Looks</h2>
        </div>
        <div className="flex-1">
          <ImageCarousel 
            onSaveItem={onSaveItem} 
            savedItems={savedItems}
            createdLooks={createdLooks}
            onExpandedViewChange={onExpandedViewChange}
          />
        </div>
      </div>
      <div className="h-1/2 flex flex-col bg-gray-50">
        <div className="px-4 py-2 bg-white border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Explore</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          <CategorySection 
            onOverlayChange={handleOverlayChange}
            onSaveItem={onSaveItem}
            savedItems={savedItems}
            onCreateLook={onCreateLook}
            addedItems={addedItems}
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreTab;
