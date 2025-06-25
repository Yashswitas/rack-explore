
import { useState } from 'react';
import Header from '../components/Header';
import ExploreTab from '../components/ExploreTab';
import RackTab from '../components/RackTab';
import BottomNavigation from '../components/BottomNavigation';
import AddItemOverlay from '../components/AddItemOverlay';

export interface SavedItem {
  id: string;
  name: string;
  company: string;
  image: string;
  buyUrl?: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [showAddOverlay, setShowAddOverlay] = useState(false);
  const [isItemOverlayOpen, setIsItemOverlayOpen] = useState(false);
  const [isExpandedViewOpen, setIsExpandedViewOpen] = useState(false);

  const handleSaveItem = (item: SavedItem) => {
    setSavedItems(prev => {
      // Check if item already exists
      const existingIndex = prev.findIndex(savedItem => savedItem.id === item.id);
      if (existingIndex !== -1) {
        // Item exists, remove it (unsave)
        return prev.filter(savedItem => savedItem.id !== item.id);
      } else {
        // Item doesn't exist, add it (save)
        return [...prev, item];
      }
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setSavedItems(prev => prev.filter(item => item.id !== itemId));
  };

  // Check if any overlay is open
  const isAnyOverlayOpen = showAddOverlay || isItemOverlayOpen || isExpandedViewOpen;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-1 overflow-hidden pb-16">
        {activeTab === 'home' && (
          <ExploreTab 
            onSaveItem={handleSaveItem} 
            savedItems={savedItems}
            onOverlayChange={setIsItemOverlayOpen}
            onExpandedViewChange={setIsExpandedViewOpen}
          />
        )}
        {activeTab === 'rack' && (
          <RackTab 
            savedItems={savedItems} 
            onRemoveItem={handleRemoveItem}
          />
        )}
      </div>

      {!isAnyOverlayOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <BottomNavigation 
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onAddClick={() => setShowAddOverlay(true)}
          />
        </div>
      )}

      {showAddOverlay && (
        <AddItemOverlay 
          onClose={() => setShowAddOverlay(false)}
          onAddItem={handleSaveItem}
        />
      )}
    </div>
  );
};

export default Index;
