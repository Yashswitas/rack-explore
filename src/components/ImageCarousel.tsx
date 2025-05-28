
import { useState } from 'react';
import { X, Share, Heart } from 'lucide-react';
import { SavedItem } from '../pages/Index';

interface ImageCarouselProps {
  onSaveItem: (item: SavedItem) => void;
}

const sampleImages = [
  {
    id: '1',
    name: 'Elegant Black Dress',
    company: 'Zara',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=600&fit=crop',
    buyUrl: '#'
  },
  {
    id: '2',
    name: 'Casual White Sneakers',
    company: 'Nike',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=600&fit=crop',
    buyUrl: '#'
  },
  {
    id: '3',
    name: 'Designer Handbag',
    company: 'Gucci',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop',
    buyUrl: '#'
  }
];

const ImageCarousel = ({ onSaveItem }: ImageCarouselProps) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [showBuyButton, setShowBuyButton] = useState<string | null>(null);

  const handleSave = (item: SavedItem) => {
    onSaveItem(item);
    setExpandedImage(null);
  };

  const handleBuy = () => {
    alert('Opening in browser..');
  };

  const handleShare = () => {
    // Share functionality
    alert('Share functionality');
  };

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
        
        <div className="flex-1 flex items-center justify-center">
          <img 
            src={item.image} 
            alt={item.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        <div className="bg-white p-6">
          <div 
            className="mb-4 cursor-pointer"
            onMouseEnter={() => setShowBuyButton(item.id)}
            onMouseLeave={() => setShowBuyButton(null)}
          >
            <h3 className="font-semibold text-lg text-black">{item.name}</h3>
            <p className="text-gray-600">{item.company}</p>
            {showBuyButton === item.id && (
              <button 
                onClick={handleBuy}
                className="mt-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium animate-fade-in"
              >
                Buy Now
              </button>
            )}
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={handleShare}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-black py-3 rounded-lg font-medium"
            >
              <Share className="w-4 h-4" />
              Share
            </button>
            <button 
              onClick={() => handleSave(item)}
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-medium"
            >
              <Heart className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-x-auto flex gap-4 p-4">
      {sampleImages.map((item) => (
        <div key={item.id} className="flex-none w-64 relative group">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            onClick={() => setExpandedImage(item.id)}
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
            <div 
              className="cursor-pointer"
              onMouseEnter={() => setShowBuyButton(item.id)}
              onMouseLeave={() => setShowBuyButton(null)}
            >
              <h3 className="font-medium text-black">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.company}</p>
              {showBuyButton === item.id && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBuy();
                  }}
                  className="mt-2 bg-primary text-white px-3 py-1 rounded text-xs font-medium animate-fade-in"
                >
                  Buy Now
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
