import { useState } from 'react';
import ItemOverlay from './ItemOverlay';

const categories = [
  {
    name: 'Tops',
    items: [
      { name: 'White T-Shirt', brand: 'H&M', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop' },
      { name: 'Silk Blouse', brand: 'Mango', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
      { name: 'Crop Top', brand: 'Zara', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=250&fit=crop' },
      { name: 'Black Tank', brand: 'H&M', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop' },
      { name: 'Striped Shirt', brand: 'COS', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
      { name: 'Hoodie', brand: 'Nike', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=250&fit=crop' },
      { name: 'Blazer', brand: 'Zara', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop' },
      { name: 'Sweater', brand: 'H&M', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
      { name: 'Button Down', brand: 'Mango', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=250&fit=crop' },
      { name: 'Polo Shirt', brand: 'Ralph Lauren', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop' },
      { name: 'Cardigan', brand: 'COS', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
      { name: 'Turtleneck', brand: 'Zara', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=250&fit=crop' },
      { name: 'Tube Top', brand: 'H&M', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop' },
      { name: 'Vest', brand: 'Mango', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
      { name: 'Peplum Top', brand: 'COS', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=250&fit=crop' },
      { name: 'Off-shoulder Top', brand: 'Zara', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Bottoms',
    items: [
      { name: 'Denim Jeans', brand: "Levi's", image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop' },
      { name: 'Wide Leg Pants', brand: 'COS', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
      { name: 'Mini Skirt', brand: 'Urban Outfitters', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13804?w=200&h=250&fit=crop' },
      { name: 'Black Trousers', brand: 'Zara', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop' },
      { name: 'Denim Shorts', brand: 'H&M', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
      { name: 'Pleated Skirt', brand: 'Mango', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13804?w=200&h=250&fit=crop' },
      { name: 'Cargo Pants', brand: 'Nike', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop' },
      { name: 'Midi Skirt', brand: 'COS', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
      { name: 'Leggings', brand: 'Lululemon', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13804?w=200&h=250&fit=crop' },
      { name: 'Chinos', brand: 'J.Crew', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop' },
      { name: 'Palazzo Pants', brand: 'Zara', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
      { name: 'Pencil Skirt', brand: 'H&M', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13804?w=200&h=250&fit=crop' },
      { name: 'Track Pants', brand: 'Adidas', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop' },
      { name: 'Culottes', brand: 'Mango', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
      { name: 'Leather Pants', brand: 'Zara', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13804?w=200&h=250&fit=crop' },
      { name: 'Bermuda Shorts', brand: 'COS', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Dresses',
    items: [
      { name: 'Maxi Dress', brand: 'Reformation', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop' },
      { name: 'Little Black Dress', brand: 'Zara', image: 'https://images.unsplash.com/photo-1566479179817-19b6073c9ea9?w=200&h=250&fit=crop' },
      { name: 'Summer Dress', brand: 'H&M', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=250&fit=crop' },
      { name: 'Cocktail Dress', brand: 'ASOS', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop' },
      { name: 'Wrap Dress', brand: 'Mango', image: 'https://images.unsplash.com/photo-1566479179817-19b6073c9ea9?w=200&h=250&fit=crop' },
      { name: 'Shirt Dress', brand: 'COS', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=250&fit=crop' },
      { name: 'Midi Dress', brand: 'Zara', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop' },
      { name: 'Slip Dress', brand: 'Silk Laundry', image: 'https://images.unsplash.com/photo-1566479179817-19b6073c9ea9?w=200&h=250&fit=crop' },
      { name: 'A-line Dress', brand: 'H&M', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=250&fit=crop' },
      { name: 'Bodycon Dress', brand: 'ASOS', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop' },
      { name: 'Sweater Dress', brand: 'COS', image: 'https://images.unsplash.com/photo-1566479179817-19b6073c9ea9?w=200&h=250&fit=crop' },
      { name: 'Floral Dress', brand: 'Zimmermann', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=250&fit=crop' },
      { name: 'Evening Gown', brand: 'Oscar de la Renta', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop' },
      { name: 'Casual Dress', brand: 'Zara', image: 'https://images.unsplash.com/photo-1566479179817-19b6073c9ea9?w=200&h=250&fit=crop' },
      { name: 'Party Dress', brand: 'H&M', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=250&fit=crop' },
      { name: 'Beach Dress', brand: 'Free People', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Bags',
    items: [
      { name: 'Tote Bag', brand: 'Coach', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=250&fit=crop' },
      { name: 'Crossbody Bag', brand: 'Marc Jacobs', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=250&fit=crop' },
      { name: 'Backpack', brand: 'Herschel', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=250&fit=crop' },
      { name: 'Clutch', brand: 'Chanel', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=250&fit=crop' },
      { name: 'Shoulder Bag', brand: 'Prada', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=250&fit=crop' },
      { name: 'Messenger Bag', brand: 'Fossil', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=250&fit=crop' },
      { name: 'Hobo Bag', brand: 'Coach', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=250&fit=crop' },
      { name: 'Bucket Bag', brand: 'Louis Vuitton', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=250&fit=crop' },
      { name: 'Satchel', brand: 'Kate Spade', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=250&fit=crop' },
      { name: 'Mini Bag', brand: 'Jacquemus', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=250&fit=crop' },
      { name: 'Work Bag', brand: 'Celine', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=250&fit=crop' },
      { name: 'Evening Bag', brand: 'Jimmy Choo', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=250&fit=crop' },
      { name: 'Travel Bag', brand: 'Away', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=250&fit=crop' },
      { name: 'Belt Bag', brand: 'Gucci', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=250&fit=crop' },
      { name: 'Laptop Bag', brand: 'Herschel', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=250&fit=crop' },
      { name: 'Duffle Bag', brand: 'Nike', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Shoes',
    items: [
      { name: 'White Sneakers', brand: 'Adidas', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=250&fit=crop' },
      { name: 'Ankle Boots', brand: 'Dr. Martens', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=200&h=250&fit=crop' },
      { name: 'High Heels', brand: 'Jimmy Choo', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop' },
      { name: 'Ballet Flats', brand: 'Repetto', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=250&fit=crop' },
      { name: 'Running Shoes', brand: 'Nike', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=200&h=250&fit=crop' },
      { name: 'Loafers', brand: 'Gucci', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop' },
      { name: 'Sandals', brand: 'Birkenstock', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=250&fit=crop' },
      { name: 'Pumps', brand: 'Christian Louboutin', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=200&h=250&fit=crop' },
      { name: 'Combat Boots', brand: 'Dr. Martens', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop' },
      { name: 'Slip-on Shoes', brand: 'Vans', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=250&fit=crop' },
      { name: 'Knee-high Boots', brand: 'Stuart Weitzman', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=200&h=250&fit=crop' },
      { name: 'Wedges', brand: 'Tory Burch', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop' },
      { name: 'Espadrilles', brand: 'Castaner', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=250&fit=crop' },
      { name: 'Oxford Shoes', brand: 'Church\'s', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=200&h=250&fit=crop' },
      { name: 'Mules', brand: 'Hermès', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop' },
      { name: 'Platform Shoes', brand: 'Stella McCartney', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Accessories',
    items: [
      { name: 'Gold Watch', brand: 'Rolex', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=250&fit=crop' },
      { name: 'Sunglasses', brand: 'Ray-Ban', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200&h=250&fit=crop' },
      { name: 'Silk Scarf', brand: 'Hermès', image: 'https://images.unsplash.com/photo-1596783779699-4055c0a2a79a?w=200&h=250&fit=crop' },
      { name: 'Pearl Necklace', brand: 'Tiffany & Co.', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=250&fit=crop' },
      { name: 'Leather Belt', brand: 'Gucci', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200&h=250&fit=crop' },
      { name: 'Diamond Earrings', brand: 'Cartier', image: 'https://images.unsplash.com/photo-1596783779699-4055c0a2a79a?w=200&h=250&fit=crop' },
      { name: 'Baseball Cap', brand: 'Nike', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=250&fit=crop' },
      { name: 'Hair Clip', brand: 'Cult Gaia', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200&h=250&fit=crop' },
      { name: 'Brooch', brand: 'Chanel', image: 'https://images.unsplash.com/photo-1596783779699-4055c0a2a79a?w=200&h=250&fit=crop' },
      { name: 'Ring', brand: 'Bulgari', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=250&fit=crop' },
      { name: 'Bracelet', brand: 'Pandora', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200&h=250&fit=crop' },
      { name: 'Anklet', brand: 'Jennifer Meyer', image: 'https://images.unsplash.com/photo-1596783779699-4055c0a2a79a?w=200&h=250&fit=crop' },
      { name: 'Hair Band', brand: 'Lele Sadoughi', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=250&fit=crop' },
      { name: 'Gloves', brand: 'Bottega Veneta', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200&h=250&fit=crop' },
      { name: 'Tie', brand: 'Tom Ford', image: 'https://images.unsplash.com/photo-1596783779699-4055c0a2a79a?w=200&h=250&fit=crop' },
      { name: 'Pocket Square', brand: 'Brunello Cucinelli', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=250&fit=crop' },
    ]
  }
];

const CategorySection = () => {
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
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default CategorySection;
