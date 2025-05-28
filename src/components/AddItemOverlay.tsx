
import { useState } from 'react';
import { X } from 'lucide-react';
import { SavedItem } from '../pages/Index';

interface AddItemOverlayProps {
  onClose: () => void;
  onAddItem: (item: SavedItem) => void;
}

const AddItemOverlay = ({ onClose, onAddItem }: AddItemOverlayProps) => {
  const [url, setUrl] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAdding(true);
    
    // Simulate adding item
    setTimeout(() => {
      const newItem: SavedItem = {
        id: Date.now().toString(),
        name: 'Added Item',
        company: 'External',
        image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop'
      };
      onAddItem(newItem);
      setIsAdding(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="bg-white w-full rounded-t-2xl p-6 animate-slide-up">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-black">Add Item</h3>
          <button onClick={onClose} className="text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>

        {isAdding ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Adding the item..</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-3">
                Add link to your item (from websites, e-com apps, etc.)
              </p>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your link here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Add Item
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddItemOverlay;
