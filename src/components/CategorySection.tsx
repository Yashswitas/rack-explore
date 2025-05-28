
const categories = [
  {
    name: 'Tops',
    items: [
      { name: 'White T-Shirt', brand: 'H&M', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=250&fit=crop' },
      { name: 'Silk Blouse', brand: 'Mango', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=250&fit=crop' },
      { name: 'Crop Top', brand: 'Zara', image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Bottoms',
    items: [
      { name: 'Denim Jeans', brand: "Levi's", image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=250&fit=crop' },
      { name: 'Wide Leg Pants', brand: 'COS', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=250&fit=crop' },
      { name: 'Mini Skirt', brand: 'Urban Outfitters', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Dresses',
    items: [
      { name: 'Maxi Dress', brand: 'Reformation', image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=250&fit=crop' },
      { name: 'Little Black Dress', brand: 'Zara', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=250&fit=crop' },
      { name: 'Summer Dress', brand: 'H&M', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Bags',
    items: [
      { name: 'Tote Bag', brand: 'Coach', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=250&fit=crop' },
      { name: 'Crossbody Bag', brand: 'Marc Jacobs', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=250&fit=crop' },
      { name: 'Backpack', brand: 'Herschel', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Shoes',
    items: [
      { name: 'White Sneakers', brand: 'Adidas', image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=250&fit=crop' },
      { name: 'Ankle Boots', brand: 'Dr. Martens', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=250&fit=crop' },
      { name: 'High Heels', brand: 'Jimmy Choo', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=250&fit=crop' },
    ]
  },
  {
    name: 'Accessories',
    items: [
      { name: 'Gold Watch', brand: 'Rolex', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=250&fit=crop' },
      { name: 'Sunglasses', brand: 'Ray-Ban', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=250&fit=crop' },
      { name: 'Silk Scarf', brand: 'Hermès', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=250&fit=crop' },
    ]
  }
];

const CategorySection = () => {
  return (
    <div className="p-6 space-y-8">
      {categories.map((category) => (
        <div key={category.name}>
          <h3 className="text-lg font-semibold mb-4 text-black">{category.name}</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {category.items.map((item, index) => (
              <div key={index} className="flex-none w-40">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h4 className="font-medium text-sm text-black truncate">{item.name}</h4>
                <p className="text-xs text-gray-600">{item.brand}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
