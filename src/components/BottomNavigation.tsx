
import { Plus } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onAddClick: () => void;
}

const BottomNavigation = ({ activeTab, onTabChange, onAddClick }: BottomNavigationProps) => {
  return (
    <div className="bg-white border-t border-gray-200 flex items-center relative py-2">
      <button 
        onClick={() => onTabChange('home')}
        className={`flex-1 py-3 text-center font-medium ${
          activeTab === 'home' ? 'text-primary' : 'text-gray-600'
        }`}
      >
        Home
      </button>
      
      <div className="flex-none px-6">
        <button 
          onClick={onAddClick}
          className="bg-primary text-white rounded-full p-4 shadow-lg hover:scale-105 transition-transform"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>
      
      <button 
        onClick={() => onTabChange('rack')}
        className={`flex-1 py-3 text-center font-medium ${
          activeTab === 'rack' ? 'text-primary' : 'text-gray-600'
        }`}
      >
        Saves
      </button>
    </div>
  );
};

export default BottomNavigation;
