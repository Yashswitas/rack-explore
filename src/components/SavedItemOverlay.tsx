
import { X, ShoppingBag } from 'lucide-react';
import { SavedItem } from '../pages/Index';

interface SavedItemOverlayProps {
  selectedItem: SavedItem;
  onClose: () => void;
  onRemoveItem: (itemId: string) => void;
}

const SavedItemOverlay = ({ selectedItem, onClose, onRemoveItem }: SavedItemOverlayProps) => {
  const handleDismiss = () => {
    onRemoveItem(selectedItem.id);
    onClose();
  };

  const handleBuyNow = () => {
    console.log('Buy now clicked for saved item:', selectedItem.name);
    alert('Buy now functionality');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="relative bg-white rounded-lg p-6 w-11/12 max-w-md max-h-[90vh] flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 p-1 rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mt-8 mb-6 flex-1 flex flex-col items-center">
          <div className="w-48 h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img 
              src={selectedItem.image} 
              alt={selectedItem.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold text-lg text-black">{selectedItem.name}</h3>
            <p className="text-gray-600">{selectedItem.company}</p>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button 
            onClick={handleDismiss}
            className="flex-1 flex items-center justify-center gap-2 bg-red-100 text-red-600 py-3 rounded-lg font-medium hover:bg-red-200 transition-colors"
          >
            <X className="w-4 h-4" />
            Dismiss
          </button>
          <button 
            onClick={handleBuyNow}
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedItemOverlay;
