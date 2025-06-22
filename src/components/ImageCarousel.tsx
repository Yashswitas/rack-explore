import { useState } from 'react';
import { X, Share, Heart, ShoppingBag, Scissors } from 'lucide-react';
import { SavedItem } from '../pages/Index';

interface ImageCarouselProps {
  onSaveItem: (item: SavedItem) => void;
}

const sampleImages = [
  {
    id: '1',
    name: 'Elegant Black Dress',
    company: 'Zara',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop',
    buyUrl: '#'
  },
  {
    id: '2',
    name: 'Casual White T-Shirt',
    company: 'H&M',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop',
    buyUrl: '#'
  },
  {
    id: '3',
    name: 'Blue Denim Jacket',
    company: 'Levi\'s',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop',
    buyUrl: '#'
  },
  {
    id: '4',
    name: 'Red Summer Dress',
    company: 'Mango',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=600&fit=crop',
    buyUrl: '#'
  },
  {
    id: '5',
    name: 'White Blouse',
    company: 'COS',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=600&fit=crop',
    buyUrl: '#'
  }
];

const ImageCarousel = ({ onSaveItem }: ImageCarouselProps) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [dismissedItems, setDismissedItems] = useState<string[]>([]);
  const [savedItems, setSavedItems] = useState<string[]>([]);

  const handleSave = (item: SavedItem, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (savedItems.includes(item.id)) {
      // Remove from saved items
      setSavedItems(prev => prev.filter(id => id !== item.id));
      console.log('Item unsaved:', item);
    } else {
      // Add to saved items
      setSavedItems(prev => [...prev, item.id]);
      console.log('Item saved:', item);
    }
    
    // Always call the parent handler to manage the actual saved items list
    onSaveItem(item);
  };

  const handleBuy = () => {
    console.log('Buy button clicked');
    alert('Opening in browser..');
  };

  const handleShare = () => {
    console.log('Share button clicked');
    alert('Share functionality');
  };

  const handleDismiss = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDismissedItems(prev => [...prev, itemId]);
    setExpandedImage(null);
    console.log('Item dismissed:', itemId);
  };

  const visibleImages = sampleImages.filter(item => !dismissedItems.includes(item.id));

  if (expandedImage) {
    const item = sampleImages.find(img => img.id === expandedImage);
    if (!item) return null;

    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col">
        <button 
          onClick={() => setExpandedImage(null)}
          className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        <div className="bg-white p-6">
          <div className="mb-4">
            <h3 className="font-semibold text-lg text-black">{item.name}</h3>
            <p className="text-gray-600">{item.company}</p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={(e) => handleDismiss(item.id, e)}
              className="flex-1 flex items-center justify-center gap-2 bg-red-100 text-red-600 py-3 rounded-lg font-medium"
            >
              <Scissors className="w-4 h-4" />
              Dismiss
            </button>
            <button 
              onClick={handleBuy}
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-medium"
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
    <div className="h-full">
      <div className="overflow-x-scroll overflow-y-hidden scrollbar-hide">
        <div className="flex gap-4 p-4 w-max">
          {visibleImages.map((item) => (
            <div key={item.id} className="flex-none w-64 h-full relative group">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => setExpandedImage(item.id)}
              />
              
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare();
                  }}
                  className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <Share className="w-4 h-4 text-black" />
                </button>
                <button 
                  onClick={(e) => handleSave(item, e)}
                  className="bg-primary p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
                >
                  <Heart 
                    className="w-4 h-4 text-white" 
                    fill={savedItems.includes(item.id) ? "white" : "none"}
                  />
                </button>
              </div>
              
              <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-sm rounded-lg p-2">
                <h3 className="font-medium text-white text-sm">{item.name}</h3>
                <p className="text-white/80 text-xs">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
