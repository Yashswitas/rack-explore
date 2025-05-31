
import { useState } from 'react';
import { SavedItem } from '../pages/Index';

interface RackTabProps {
  savedItems: SavedItem[];
}

const RackTab = ({ savedItems }: RackTabProps) => {
  const [activeSection, setActiveSection] = useState('saved-tryons');

  return (
    <div className="h-full flex flex-col">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 bg-white">
        <button
          onClick={() => setActiveSection('saved-tryons')}
          className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
            activeSection === 'saved-tryons'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-600'
          }`}
        >
          Saved Try-ons
        </button>
        <button
          onClick={() => setActiveSection('saved-items')}
          className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
            activeSection === 'saved-items'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-600'
          }`}
        >
          Saved Items
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {activeSection === 'saved-tryons' && (
          <div>
            <h2 className="text-xl font-semibold mb-6 text-black">Saved Try-ons</h2>
            
            {savedItems.length === 0 ? (
              <div className="text-center text-gray-500 mt-20">
                <p>No saved try-ons yet</p>
                <p className="text-sm mt-2">Save items from Explore to see them here</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {savedItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm border">
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
        )}

        {activeSection === 'saved-items' && (
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
                  <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm border">
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
        )}
      </div>
    </div>
  );
};

export default RackTab;
