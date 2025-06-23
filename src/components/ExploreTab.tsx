
import { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';
import CategorySection from './CategorySection';
import { SavedItem } from '../pages/Index';

interface ExploreTabProps {
  onSaveItem: (item: SavedItem) => void;
  savedItems: SavedItem[];
  onOverlayChange?: (isOpen: boolean) => void;
  onExpandedViewChange?: (isOpen: boolean) => void;
}

const ExploreTab = ({ onSaveItem, savedItems, onOverlayChange, onExpandedViewChange }: ExploreTabProps) => {
  const [isItemOverlayOpen, setIsItemOverlayOpen] = useState(false);

  const handleOverlayChange = (isOpen: boolean) => {
    setIsItemOverlayOpen(isOpen);
    onOverlayChange?.(isOpen);
  };

  // Monitor for expanded view state changes from ImageCarousel
  useEffect(() => {
    const checkExpandedView = () => {
      const expandedView = document.querySelector('.fixed.inset-0.bg-black.z-50');
      const isExpanded = !!expandedView;
      onExpandedViewChange?.(isExpanded);
    };

    const observer = new MutationObserver(checkExpandedView);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [onExpandedViewChange]);

  return (
    <div className="h-full flex flex-col">
      <div className="h-1/2">
        <ImageCarousel onSaveItem={onSaveItem} savedItems={savedItems} />
      </div>
      <div className="h-1/2 overflow-y-auto bg-gray-50">
        <CategorySection onOverlayChange={handleOverlayChange} />
      </div>
    </div>
  );
};

export default ExploreTab;
