
import { useState } from 'react';
import { X, ShoppingBag, Camera } from 'lucide-react';

interface ItemOverlayProps {
  selectedItem: {
    name: string;
    brand: string;
    image: string;
    category: string;
  };
  onClose: () => void;
}

const bottomsItems = [
  { name: 'High-Waisted Jeans', brand: "Levi's", image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop' },
  { name: 'Black Trousers', brand: 'Zara', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
  { name: 'Pleated Skirt', brand: 'H&M', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13804?w=200&h=250&fit=crop' },
  { name: 'Wide Leg Pants', brand: 'COS', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
  { name: 'Denim Shorts', brand: 'Urban Outfitters', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop' },
];

const topsItems = [
  { name: 'White T-Shirt', brand: 'H&M', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop' },
  { name: 'Silk Blouse', brand: 'Mango', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
  { name: 'Crop Top', brand: 'Zara', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=250&fit=crop' },
  { name: 'Sweater', brand: 'COS', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop' },
  { name: 'Tank Top', brand: 'H&M', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=250&fit=crop' },
];

const ItemOverlay = ({ selectedItem, onClose }: ItemOverlayProps) => {
  const [selectedSecondItem, setSelectedSecondItem] = useState(0);
  
  const secondCategoryItems = selectedItem.category === 'tops' ? bottomsItems : topsItems;
  const secondCategoryName = selectedItem.category === 'tops' ? 'bottoms' : 'tops';

  const handleTryOn = () => {
    console.log('Try-on clicked');
    alert('Try-on functionality');
  };

  const handleBuyNow = () => {
    console.log('Buy now clicked');
    alert('Buy now functionality');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="relative bg-white rounded-lg p-6 w-11/12 max-w-md">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={selectedItem.image} 
              alt={selectedItem.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={secondCategoryItems[selectedSecondItem].image} 
              alt={secondCategoryItems[selectedSecondItem].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2 capitalize">{secondCategoryName}</p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {secondCategoryItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedSecondItem(index)}
                className={`flex-none w-16 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedSecondItem === index ? 'border-primary' : 'border-gray-200'
                }`}
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button 
            onClick={handleTryOn}
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-medium"
          >
            <Camera className="w-4 h-4" />
            Try On
          </button>
          <button 
            onClick={handleBuyNow}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-black py-3 rounded-lg font-medium"
          >
            <ShoppingBag className="w-4 h-4" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemOverlay;
