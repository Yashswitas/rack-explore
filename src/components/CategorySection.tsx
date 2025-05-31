
const categories = [
  {
    name: 'Tops',
    items: [
      { name: 'White T-Shirt', brand: 'H&M', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop' },
      { name: 'Silk Blouse', brand: 'Mango', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
      { name: 'Crop Top', brand: 'Zara', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Bottoms',
    items: [
      { name: 'Denim Jeans', brand: "Levi's", image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop' },
      { name: 'Wide Leg Pants', brand: 'COS', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop' },
      { name: 'Mini Skirt', brand: 'Urban Outfitters', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13804?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Dresses',
    items: [
      { name: 'Maxi Dress', brand: 'Reformation', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=250&fit=crop' },
      { name: 'Little Black Dress', brand: 'Zara', image: 'https://images.unsplash.com/photo-1566479179817-19b6073c9ea9?w=200&h=250&fit=crop' },
      { name: 'Summer Dress', brand: 'H&M', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Bags',
    items: [
      { name: 'Tote Bag', brand: 'Coach', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=250&fit=crop' },
      { name: 'Crossbody Bag', brand: 'Marc Jacobs', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=250&fit=crop' },
      { name: 'Backpack', brand: 'Herschel', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Shoes',
    items: [
      { name: 'White Sneakers', brand: 'Adidas', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=250&fit=crop' },
      { name: 'Ankle Boots', brand: 'Dr. Martens', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=200&h=250&fit=crop' },
      { name: 'High Heels', brand: 'Jimmy Choo', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Accessories',
    items: [
      { name: 'Gold Watch', brand: 'Rolex', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=250&fit=crop' },
      { name: 'Sunglasses', brand: 'Ray-Ban', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200&h=250&fit=crop' },
      { name: 'Silk Scarf', brand: 'Hermès', image: 'https://images.unsplash.com/photo-1596783779699-4055c0a2a79a?w=200&h=250&fit=crop' },
    ]
  }
];

const CategorySection = () => {
  return (
    <div className="p-4 space-y-6">
      {categories.map((category) => (
        <div key={category.name}>
          <h3 className="text-base font-semibold mb-3 text-black">{category.name}</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {category.items.map((item, index) => (
              <div key={index} className="flex-none w-24">
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
    </div>
  );
};

export default CategorySection;
