
import { useState } from 'react';
import ItemOverlay from './ItemOverlay';

const categories = [
  {
    name: 'Tops',
    items: [
      { name: 'Classic White T-Shirt', brand: 'H&M', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop' },
      { name: 'Silk Blouse', brand: 'Mango', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=250&fit=crop' },
      { name: 'Crop Top', brand: 'Zara', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=250&fit=crop' },
      { name: 'Black Tank Top', brand: 'H&M', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=200&h=250&fit=crop' },
      { name: 'Striped Shirt', brand: 'COS', image: 'https://images.unsplash.com/photo-1541840031508-326b77c609a7?w=200&h=250&fit=crop' },
      { name: 'Gray Hoodie', brand: 'Nike', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=250&fit=crop' },
      { name: 'Navy Blazer', brand: 'Zara', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop' },
      { name: 'Knit Sweater', brand: 'H&M', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&h=250&fit=crop' },
      { name: 'Denim Shirt', brand: 'Levi\'s', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=250&fit=crop' },
      { name: 'Polo Shirt', brand: 'Ralph Lauren', image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=200&h=250&fit=crop' },
      { name: 'Cardigan', brand: 'COS', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=200&h=250&fit=crop' },
      { name: 'Turtleneck', brand: 'Zara', image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=200&h=250&fit=crop' },
      { name: 'Off-Shoulder Top', brand: 'Mango', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=250&fit=crop' },
      { name: 'Vest Top', brand: 'H&M', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&h=250&fit=crop' },
      { name: 'Peplum Blouse', brand: 'COS', image: 'https://images.unsplash.com/photo-1596783779699-4055c0a2a79a?w=200&h=250&fit=crop' },
      { name: 'Graphic Tee', brand: 'Urban Outfitters', image: 'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Bottoms',
    items: [
      { name: 'High-Waisted Jeans', brand: "Levi's", image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop' },
      { name: 'Wide Leg Trousers', brand: 'COS', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
      { name: 'Pleated Mini Skirt', brand: 'Urban Outfitters', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13804?w=200&h=250&fit=crop' },
      { name: 'Black Skinny Jeans', brand: 'Zara', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&h=250&fit=crop' },
      { name: 'Denim Shorts', brand: 'H&M', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=250&fit=crop' },
      { name: 'A-Line Skirt', brand: 'Mango', image: 'https://images.unsplash.com/photo-1566479179817-19b6073c9ea9?w=200&h=250&fit=crop' },
      { name: 'Cargo Pants', brand: 'Nike', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200&h=250&fit=crop' },
      { name: 'Midi Skirt', brand: 'COS', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=250&fit=crop' },
      { name: 'Black Leggings', brand: 'Lululemon', image: 'https://images.unsplash.com/photo-1506629905607-d405b01e3237?w=200&h=250&fit=crop' },
      { name: 'Chino Pants', brand: 'J.Crew', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200&h=250&fit=crop' },
      { name: 'Palazzo Pants', brand: 'Zara', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
      { name: 'Pencil Skirt', brand: 'H&M', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop' },
      { name: 'Track Pants', brand: 'Adidas', image: 'https://images.unsplash.com/photo-1506629905607-d405b01e3237?w=200&h=250&fit=crop' },
      { name: 'Culottes', brand: 'Mango', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13804?w=200&h=250&fit=crop' },
      { name: 'Leather Pants', brand: 'Zara', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&h=250&fit=crop' },
      { name: 'Bermuda Shorts', brand: 'COS', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Dresses',
    items: [
      { name: 'Floral Maxi Dress', brand: 'Reformation', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop' },
      { name: 'Little Black Dress', brand: 'Zara', image: 'https://images.unsplash.com/photo-1566479179817-19b6073c9ea9?w=200&h=250&fit=crop' },
      { name: 'Sundress', brand: 'H&M', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=250&fit=crop' },
      { name: 'Cocktail Dress', brand: 'ASOS', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=250&fit=crop' },
      { name: 'Wrap Dress', brand: 'Mango', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=250&fit=crop' },
      { name: 'Shirt Dress', brand: 'COS', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&h=250&fit=crop' },
      { name: 'Midi Dress', brand: 'Zara', image: 'https://images.unsplash.com/photo-1596783779699-4055c0a2a79a?w=200&h=250&fit=crop' },
      { name: 'Slip Dress', brand: 'Silk Laundry', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=250&fit=crop' },
      { name: 'A-line Dress', brand: 'H&M', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=250&fit=crop' },
      { name: 'Bodycon Dress', brand: 'ASOS', image: 'https://images.unsplash.com/photo-1566479179817-19b6073c9ea9?w=200&h=250&fit=crop' },
      { name: 'Sweater Dress', brand: 'COS', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&h=250&fit=crop' },
      { name: 'Polka Dot Dress', brand: 'Zimmermann', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop' },
      { name: 'Evening Gown', brand: 'Oscar de la Renta', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=250&fit=crop' },
      { name: 'Casual Day Dress', brand: 'Zara', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=250&fit=crop' },
      { name: 'Party Dress', brand: 'H&M', image: 'https://images.unsplash.com/photo-1566479179817-19b6073c9ea9?w=200&h=250&fit=crop' },
      { name: 'Beach Cover-up', brand: 'Free People', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Shoes',
    items: [
      { name: 'White Sneakers', brand: 'Adidas', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=250&fit=crop' },
      { name: 'Black Ankle Boots', brand: 'Dr. Martens', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=200&h=250&fit=crop' },
      { name: 'Red High Heels', brand: 'Jimmy Choo', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop' },
      { name: 'Black Ballet Flats', brand: 'Repetto', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=200&h=250&fit=crop' },
      { name: 'Running Shoes', brand: 'Nike', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=250&fit=crop' },
      { name: 'Brown Loafers', brand: 'Gucci', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=200&h=250&fit=crop' },
      { name: 'Strappy Sandals', brand: 'Birkenstock', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop' },
      { name: 'Pointed Pumps', brand: 'Christian Louboutin', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=200&h=250&fit=crop' },
      { name: 'Combat Boots', brand: 'Dr. Martens', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=200&h=250&fit=crop' },
      { name: 'Canvas Slip-ons', brand: 'Vans', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=250&fit=crop' },
      { name: 'Suede Knee Boots', brand: 'Stuart Weitzman', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=200&h=250&fit=crop' },
      { name: 'Cork Wedges', brand: 'Tory Burch', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop' },
      { name: 'Rope Espadrilles', brand: 'Castaner', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=200&h=250&fit=crop' },
      { name: 'Oxford Shoes', brand: 'Church\'s', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=200&h=250&fit=crop' },
      { name: 'Leather Mules', brand: 'Hermès', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=200&h=250&fit=crop' },
      { name: 'Platform Shoes', brand: 'Stella McCartney', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop' },
    ]
  }
];

interface CategorySectionProps {
  onOverlayChange: (isOpen: boolean) => void;
}

const CategorySection = ({ onOverlayChange }: CategorySectionProps) => {
  const [selectedItem, setSelectedItem] = useState<{
    name: string;
    brand: string;
    image: string;
    category: string;
  } | null>(null);

  const handleItemClick = (item: any, categoryName: string) => {
    setSelectedItem({
      name: item.name,
      brand: item.brand,
      image: item.image,
      category: categoryName.toLowerCase(),
    });
    onOverlayChange(true);
  };

  const handleCloseOverlay = () => {
    setSelectedItem(null);
    onOverlayChange(false);
  };

  return (
    <div className="p-4 space-y-6">
      {categories.map((category) => (
        <div key={category.name}>
          <h3 className="text-base font-semibold mb-3 text-black">{category.name}</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {category.items.map((item, index) => (
              <div 
                key={index} 
                className="flex-none w-24 cursor-pointer"
                onClick={() => handleItemClick(item, category.name)}
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-28 object-cover rounded-lg mb-1"
                />
                <h4 className="font-medium text-xs text-black truncate">{item.name}</h4>
                <p className="text-xs text-gray-600 truncate">{item.brand}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedItem && (
        <ItemOverlay 
          selectedItem={selectedItem}
          onClose={handleCloseOverlay}
        />
      )}
    </div>
  );
};

export default CategorySection;
