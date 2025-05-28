
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
  const [activeTab, setActiveTab] = useState('explore');
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [showAddOverlay, setShowAddOverlay] = useState(false);

  const handleSaveItem = (item: SavedItem) => {
    setSavedItems(prev => [...prev, item]);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-1 overflow-hidden pb-20">
        {activeTab === 'explore' && (
          <ExploreTab onSaveItem={handleSaveItem} />
        )}
        {activeTab === 'rack' && (
          <RackTab savedItems={savedItems} />
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation 
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onAddClick={() => setShowAddOverlay(true)}
        />
      </div>

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
