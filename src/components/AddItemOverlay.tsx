import { useState } from 'react';
import { X, Scissors, Heart } from 'lucide-react';
import { SavedItem } from '../pages/Index';

interface AddItemOverlayProps {
  onClose: () => void;
  onAddItem: (item: SavedItem) => void;
}

// Comprehensive e-commerce domains and patterns for validation
const ecommerceDomains = [
  // Major marketplaces
  'amazon.com', 'amazon.co.uk', 'amazon.ca', 'amazon.de', 'amazon.fr', 'amazon.es', 'amazon.it', 'amazon.co.jp',
  'ebay.com', 'ebay.co.uk', 'ebay.de', 'ebay.fr', 'ebay.it', 'ebay.es',
  'etsy.com', 'alibaba.com', 'aliexpress.com',
  
  // Fashion & clothing
  'zara.com', 'hm.com', 'nike.com', 'adidas.com', 'uniqlo.com', 'gap.com', 'forever21.com',
  'asos.com', 'zalando.com', 'boohoo.com', 'prettylittlething.com', 'shein.com', 'yesstyle.com',
  'nordstrom.com', 'macys.com', 'bloomingdales.com', 'saks.com', 'barneys.com',
  
  // Beauty & cosmetics
  'sephora.com', 'ulta.com', 'beautybay.com', 'lookfantastic.com', 'dermstore.com',
  
  // Department stores
  'target.com', 'walmart.com', 'costco.com', 'bestbuy.com', 'homedepot.com', 'lowes.com',
  
  // E-commerce platforms
  'shopify.com', 'woocommerce.com', 'bigcommerce.com', 'magento.com',
  
  // Generic shopping indicators
  'shop.', '.shop', 'store.', '.store', 'buy.', '.buy', 'cart.', 'checkout.',
  'ecommerce.', 'webshop.', 'onlinestore.', 'marketplace.', 'retail.'
];

// Shopping-related keywords that indicate e-commerce functionality
const ecommerceKeywords = [
  'shop', 'store', 'buy', 'purchase', 'cart', 'basket', 'checkout', 'payment',
  'ecommerce', 'e-commerce', 'retail', 'marketplace', 'webshop', 'onlinestore',
  'wishlist', 'addtocart', 'buynow', 'order', 'product', 'catalog', 'inventory'
];

const AddItemOverlay = ({ onClose, onAddItem }: AddItemOverlayProps) => {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    previewData?: {
      title: string;
      image: string;
      domain: string;
    };
    message: string;
  } | null>(null);

  const isEcommerceUrl = (urlString: string): boolean => {
    try {
      const urlObj = new URL(urlString);
      const hostname = urlObj.hostname.toLowerCase();
      const pathname = urlObj.pathname.toLowerCase();
      const fullUrl = urlString.toLowerCase();
      
      // Check if domain contains any e-commerce domains
      const domainMatch = ecommerceDomains.some(domain => 
        hostname.includes(domain) || hostname.endsWith(domain) || hostname.startsWith(domain)
      );
      
      // Check if URL contains shopping-related keywords
      const keywordMatch = ecommerceKeywords.some(keyword => 
        hostname.includes(keyword) || pathname.includes(keyword) || fullUrl.includes(keyword)
      );
      
      // Check for common e-commerce URL patterns
      const patternMatch = 
        pathname.includes('/product/') ||
        pathname.includes('/item/') ||
        pathname.includes('/shop/') ||
        pathname.includes('/store/') ||
        pathname.includes('/buy/') ||
        pathname.includes('/p/') ||
        urlString.includes('product') ||
        urlString.includes('item') ||
        urlString.includes('catalog');
      
      return domainMatch || keywordMatch || patternMatch;
    } catch {
      return false;
    }
  };

  const generatePreviewData = (urlString: string) => {
    try {
      const urlObj = new URL(urlString);
      const domain = urlObj.hostname.replace('www.', '');
      
      // Generate mock preview data based on domain
      const mockTitles = [
        'Stylish Winter Jacket',
        'Premium Cotton T-Shirt',
        'Designer Sneakers',
        'Elegant Evening Dress',
        'Classic Denim Jeans'
      ];
      
      const mockImages = [
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop'
      ];
      
      return {
        title: mockTitles[Math.floor(Math.random() * mockTitles.length)],
        image: mockImages[Math.floor(Math.random() * mockImages.length)],
        domain: domain
      };
    } catch {
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsProcessing(true);
    
    // Simulate checking the webpage in background
    setTimeout(() => {
      const isValid = isEcommerceUrl(url);
      
      if (isValid) {
        const previewData = generatePreviewData(url);
        setValidationResult({
          isValid: true,
          previewData,
          message: 'Success! This appears to be a shopping website.'
        });
      } else {
        setValidationResult({
          isValid: false,
          message: 'This link doesn\'t appear to be from a shopping or e-commerce website. Please try a link from an online store.'
        });
      }
      
      setIsProcessing(false);
    }, 2000);
  };

  const handleSave = () => {
    if (validationResult?.isValid && validationResult.previewData) {
      const newItem: SavedItem = {
        id: Date.now().toString(),
        name: validationResult.previewData.title,
        company: validationResult.previewData.domain,
        image: validationResult.previewData.image,
        buyUrl: url
      };
      onAddItem(newItem);
      onClose();
    }
  };

  const handleDismiss = () => {
    setValidationResult(null);
    setUrl('');
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="bg-white w-full rounded-t-2xl p-6 animate-slide-up max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-black">Add Item</h3>
          <button onClick={onClose} className="text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>

        {isProcessing ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Checking the website...</p>
          </div>
        ) : validationResult ? (
          <div className="space-y-6">
            <div className={`p-4 rounded-lg ${validationResult.isValid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <p className={`font-medium ${validationResult.isValid ? 'text-green-800' : 'text-red-800'}`}>
                {validationResult.message}
              </p>
            </div>

            {validationResult.isValid && validationResult.previewData && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Preview</h4>
                <div className="flex gap-4">
                  <img 
                    src={validationResult.previewData.image}
                    alt={validationResult.previewData.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900">{validationResult.previewData.title}</h5>
                    <p className="text-sm text-gray-600">{validationResult.previewData.domain}</p>
                    <p className="text-xs text-gray-500 mt-1 break-all">{url}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button 
                onClick={handleDismiss}
                className="flex-1 flex items-center justify-center gap-2 bg-red-100 text-red-600 py-3 rounded-lg font-medium hover:bg-red-200 transition-colors"
              >
                <Scissors className="w-4 h-4" />
                Dismiss
              </button>
              {validationResult.isValid && (
                <button 
                  onClick={handleSave}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Heart className="w-4 h-4" />
                  Save
                </button>
              )}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-3">
                Add link to your item (from websites, e-com apps, etc.)
              </p>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your link here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Add Item
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddItemOverlay;
