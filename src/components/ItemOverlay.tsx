import { useState } from 'react';
import { X, ShoppingBag, Heart } from 'lucide-react';

interface ItemOverlayProps {
  selectedItem: {
    name: string;
    brand: string;
    image: string;
    category: string;
  };
  onClose: () => void;
  onSaveItem?: (item: any) => void;
  savedItems?: any[];
}

const bottomsItems = [
  { name: 'High-Waisted Jeans', brand: "Levi's", image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop' },
  { name: 'Wide Leg Trousers', brand: 'COS', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
  { name: 'Pleated Mini Skirt', brand: 'Urban Outfitters', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13804?w=200&h=250&fit=crop' },
  { name: 'Black Skinny Jeans', brand: 'Zara', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&h=250&fit=crop' },
  { name: 'Denim Shorts', brand: 'H&M', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=250&fit=crop' },
];

const topsItems = [
  { name: 'Classic White T-Shirt', brand: 'H&M', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop' },
  { name: 'Silk Blouse', brand: 'Mango', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=250&fit=crop' },
  { name: 'Crop Top', brand: 'Zara', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=250&fit=crop' },
  { name: 'Black Tank Top', brand: 'H&M', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=200&h=250&fit=crop' },
  { name: 'Striped Shirt', brand: 'COS', image: 'https://images.unsplash.com/photo-1541840031508-326b77c609a7?w=200&h=250&fit=crop' },
];

const shoesItems = [
  { name: 'White Sneakers', brand: 'Adidas', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=250&fit=crop' },
  { name: 'Black Ankle Boots', brand: 'Dr. Martens', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=200&h=250&fit=crop' },
  { name: 'Red High Heels', brand: 'Jimmy Choo', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop' },
  { name: 'Black Ballet Flats', brand: 'Repetto', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=200&h=250&fit=crop' },
  { name: 'Running Shoes', brand: 'Nike', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=250&fit=crop' },
];

const dressesItems = [
  { name: 'Floral Maxi Dress', brand: 'Reformation', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop' },
  { name: 'Little Black Dress', brand: 'Zara', image: 'https://images.unsplash.com/photo-1566479179817-19b6073c9ea9?w=200&h=250&fit=crop' },
  { name: 'Sundress', brand: 'H&M', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=250&fit=crop' },
  { name: 'Cocktail Dress', brand: 'ASOS', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=250&fit=crop' },
  { name: 'Wrap Dress', brand: 'Mango', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=250&fit=crop' },
];

const ItemOverlay = ({ selectedItem, onClose, onSaveItem, savedItems = [] }: ItemOverlayProps) => {
  const [selectedSecondItem, setSelectedSecondItem] = useState<number | null>(null);
  
  // Implement pairing mechanism
  let secondCategoryItems;
  let secondCategoryName;
  
  if (selectedItem.category === 'top') {
    secondCategoryItems = bottomsItems;
    secondCategoryName = 'bottom';
  } else if (selectedItem.category === 'bottom') {
    secondCategoryItems = topsItems;
    secondCategoryName = 'top';
  } else if (selectedItem.category === 'dress') {
    secondCategoryItems = shoesItems;
    secondCategoryName = 'shoes';
  } else if (selectedItem.category === 'shoes') {
    secondCategoryItems = dressesItems;
    secondCategoryName = 'dress';
  } else {
    // Default fallback
    secondCategoryItems = topsItems;
    secondCategoryName = 'top';
  }

  const handleSave = () => {
    if (selectedSecondItem === null || !onSaveItem) return;
    
    const secondItem = secondCategoryItems[selectedSecondItem];
    
    // Create outfit object to save
    const outfit = {
      id: `outfit-${Date.now()}`,
      name: `${selectedItem.name} + ${secondItem.name}`,
      company: `${selectedItem.brand} & ${secondItem.brand}`,
      image: selectedItem.image, // Use first item's image as primary
      items: [selectedItem, secondItem],
      buyUrl: '#'
    };
    
    console.log('Saving outfit:', outfit);
    onSaveItem(outfit);
    onClose();
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
          <div className={`aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden ${selectedSecondItem !== null ? 'ring-2 ring-primary' : ''}`}>
            <img 
              src={selectedItem.image} 
              alt={selectedItem.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
            {selectedSecondItem !== null ? (
              <img 
                src={secondCategoryItems[selectedSecondItem].image} 
                alt={secondCategoryItems[selectedSecondItem].name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Select an item
              </div>
            )}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2 capitalize">Choose a {secondCategoryName}</p>
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
            onClick={handleSave}
            disabled={selectedSecondItem === null}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all ${
              selectedSecondItem === null 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50' 
                : 'bg-primary text-white hover:bg-primary/90'
            }`}
          >
            <Heart className="w-4 h-4" />
            Save
          </button>
          <button 
            onClick={handleBuyNow}
            disabled={selectedSecondItem === null}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all ${
              selectedSecondItem === null 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50' 
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
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
