
import { useState } from 'react';
import { X, Share, Heart, ShoppingBag } from 'lucide-react';
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
  },
  {
    id: '4',
    name: 'Summer Sunglasses',
    company: 'Ray-Ban',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=600&fit=crop',
    buyUrl: '#'
  },
  {
    id: '5',
    name: 'Leather Jacket',
    company: 'Zara',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop',
    buyUrl: '#'
  }
];

const ImageCarousel = ({ onSaveItem }: ImageCarouselProps) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const handleSave = (item: SavedItem) => {
    onSaveItem(item);
    console.log('Item saved:', item);
  };

  const handleBuy = () => {
    console.log('Buy button clicked');
    alert('Opening in browser..');
  };

  const handleShare = () => {
    console.log('Share button clicked');
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
          <div className="mb-4">
            <h3 className="font-semibold text-lg text-black">{item.name}</h3>
            <p className="text-gray-600">{item.company}</p>
            <button 
              onClick={handleBuy}
              className="mt-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Buy Now
            </button>
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
    <div className="h-full">
      <div className="overflow-x-scroll overflow-y-hidden">
        <div className="flex gap-4 p-4 w-max">
          {sampleImages.map((item) => (
            <div key={item.id} className="flex-none w-64 h-full relative group">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => setExpandedImage(item.id)}
              />
              
              {/* Floating action buttons */}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSave(item);
                  }}
                  className="bg-primary p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
                >
                  <Heart className="w-4 h-4 text-white" />
                </button>
              </div>
              
              {/* Simple title overlay at bottom */}
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
