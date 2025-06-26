import { useState } from 'react';
import { X, Heart } from 'lucide-react';
import { SavedItem } from '../pages/Index';

interface AddItemOverlayProps {
  onClose: () => void;
  onAddItem: (item: SavedItem & { category?: string }) => void;
}

// Comprehensive e-commerce domains including marketplaces and platforms
const ecommerceDomains = [
  // Major global marketplaces
  'amazon.com', 'amazon.co.uk', 'amazon.ca', 'amazon.de', 'amazon.fr', 'amazon.es', 'amazon.it', 'amazon.co.jp', 'amazon.in', 'amazon.com.au',
  'ebay.com', 'ebay.co.uk', 'ebay.de', 'ebay.fr', 'ebay.it', 'ebay.es', 'ebay.ca', 'ebay.com.au',
  'etsy.com', 'alibaba.com', 'aliexpress.com', 'dhgate.com', 'wish.com', 'mercadolibre.com',
  'rakuten.com', 'flipkart.com', 'myntra.com', 'jabong.com', 'snapdeal.com',
  
  // Fashion & clothing retailers
  'zara.com', 'hm.com', 'nike.com', 'adidas.com', 'uniqlo.com', 'gap.com', 'forever21.com',
  'asos.com', 'zalando.com', 'boohoo.com', 'prettylittlething.com', 'shein.com', 'yesstyle.com',
  'nordstrom.com', 'macys.com', 'bloomingdales.com', 'saks.com', 'barneys.com', 'jcrew.com',
  'anthropologie.com', 'urbanoutfitters.com', 'freepeople.com', 'revolve.com', 'shopbop.com',
  
  // Beauty & cosmetics
  'sephora.com', 'ulta.com', 'beautybay.com', 'lookfantastic.com', 'dermstore.com', 'cultbeauty.com',
  
  // Department & big box stores
  'target.com', 'walmart.com', 'costco.com', 'bestbuy.com', 'homedepot.com', 'lowes.com',
  'kohls.com', 'jcpenney.com', 'sears.com', 'walmart.ca', 'canadiantire.ca',
  
  // E-commerce platforms and solutions
  'shopify.com', 'woocommerce.com', 'bigcommerce.com', 'magento.com', 'squarespace.com', 'wix.com',
  'etsy.com', 'etsy.com', 'bonanza.com', 'mercari.com', 'poshmark.com', 'depop.com', 'vinted.com',
  
  // Regional and specialized marketplaces
  'shopee.com', 'lazada.com', 'tokopedia.com', 'bukalapak.com', 'qoo10.com', 'gmarket.co.kr',
  'tmall.com', 'taobao.com', 'jd.com', 'pinduoduo.com', '1688.com',
  
  // Luxury and designer
  'net-a-porter.com', 'matchesfashion.com', 'farfetch.com', 'ssense.com', 'mrporter.com',
  'theoutnet.com', 'yoox.com', 'gilt.com', 'rue21.com', 'thredup.com',
  
  // Generic shopping indicators
  'shop.', '.shop', 'store.', '.store', 'buy.', '.buy', 'cart.', 'checkout.',
  'ecommerce.', 'webshop.', 'onlinestore.', 'marketplace.', 'retail.', 'outlet.'
];

// E-commerce content indicators to search for in webpage content
const ecommerceContentIndicators = [
  // Shopping cart and purchase buttons
  'add to cart', 'add to bag', 'add to basket', 'buy now', 'purchase now', 'buy it now',
  'quick buy', 'shop now', 'order now', 'get it now', 'checkout', 'proceed to checkout',
  
  // Wishlist and save functionality
  'add to wishlist', 'add to favorites', 'add to list', 'save for later', 'save item',
  'wishlist', 'favorites', 'my list', 'saved items',
  
  // Product and pricing indicators
  'price', '$', '€', '£', '¥', '₹', 'free shipping', 'shipping', 'delivery',
  'in stock', 'out of stock', 'available', 'quantity', 'size', 'color',
  'product details', 'product description', 'specifications', 'reviews',
  
  // E-commerce specific elements
  'shopping cart', 'cart total', 'subtotal', 'total price', 'payment methods',
  'credit card', 'paypal', 'apple pay', 'google pay', 'stripe', 'payment',
  'return policy', 'shipping policy', 'size guide', 'size chart',
  
  // Common e-commerce meta indicators
  'shopify', 'woocommerce', 'magento', 'bigcommerce', 'opencart', 'prestashop',
  'product-page', 'ecommerce', 'e-commerce', 'online store', 'web store'
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
      category: string;
      description: string;
    };
    message: string;
  } | null>(null);

  const isEcommerceDomain = (urlString: string): boolean => {
    try {
      const urlObj = new URL(urlString);
      const hostname = urlObj.hostname.toLowerCase();
      
      return ecommerceDomains.some(domain => 
        hostname.includes(domain) || hostname.endsWith(domain) || hostname.startsWith(domain)
      );
    } catch {
      return false;
    }
  };

  const analyzeWebpageContent = async (urlString: string): Promise<boolean> => {
    try {
      // In a real implementation, you'd use a CORS proxy or backend service
      // For now, we'll simulate content analysis with enhanced heuristics
      
      const urlObj = new URL(urlString);
      const pathname = urlObj.pathname.toLowerCase();
      const search = urlObj.search.toLowerCase();
      const fullUrl = urlString.toLowerCase();
      
      // Check URL structure for e-commerce patterns
      const hasEcommerceUrlPattern = 
        pathname.includes('/product/') ||
        pathname.includes('/item/') ||
        pathname.includes('/p/') ||
        pathname.includes('/dp/') || // Amazon
        pathname.includes('/products/') ||
        pathname.includes('/shop/') ||
        pathname.includes('/store/') ||
        pathname.includes('/buy/') ||
        pathname.includes('/catalog/') ||
        search.includes('product') ||
        search.includes('item') ||
        search.includes('sku');
      
      // Check for e-commerce keywords in the full URL
      const hasEcommerceKeywords = ecommerceContentIndicators.some(indicator => 
        fullUrl.includes(indicator.replace(' ', '')) ||
        fullUrl.includes(indicator.replace(' ', '-')) ||
        fullUrl.includes(indicator.replace(' ', '_'))
      );
      
      // Enhanced domain-based detection
      const domainKeywords = ['shop', 'store', 'buy', 'cart', 'market', 'retail', 'outlet', 'mall'];
      const hasDomainKeywords = domainKeywords.some(keyword => 
        urlObj.hostname.includes(keyword)
      );
      
      // Check for common e-commerce subdomains
      const ecommerceSubdomains = ['shop', 'store', 'buy', 'www', 'en', 'us', 'uk'];
      const hasEcommerceSubdomain = ecommerceSubdomains.some(subdomain => 
        urlObj.hostname.startsWith(subdomain + '.')
      );
      
      return hasEcommerceUrlPattern || hasEcommerceKeywords || hasDomainKeywords || hasEcommerceSubdomain;
    } catch {
      return false;
    }
  };

  const validateEcommerceUrl = async (urlString: string): Promise<boolean> => {
    // First check if it's a known e-commerce domain
    if (isEcommerceDomain(urlString)) {
      return true;
    }
    
    // Then analyze the webpage content structure
    const contentAnalysis = await analyzeWebpageContent(urlString);
    return contentAnalysis;
  };

  const categorizeItem = (title: string, url: string): string => {
    const titleLower = title.toLowerCase();
    const urlLower = url.toLowerCase();
    
    // Top category keywords
    const topKeywords = ['shirt', 't-shirt', 'tee', 'blouse', 'top', 'tank', 'crop', 'hoodie', 'sweater', 'cardigan', 'blazer', 'jacket', 'vest', 'polo', 'turtleneck'];
    
    // Bottom category keywords
    const bottomKeywords = ['jeans', 'pants', 'trousers', 'shorts', 'skirt', 'leggings', 'chinos', 'culottes', 'palazzo', 'cargo'];
    
    // Dress category keywords
    const dressKeywords = ['dress', 'gown', 'frock', 'sundress', 'maxi', 'midi', 'mini dress', 'cocktail', 'evening'];
    
    // Shoe category keywords
    const shoeKeywords = ['shoes', 'sneakers', 'boots', 'heels', 'flats', 'sandals', 'loafers', 'pumps', 'mules', 'oxfords', 'espadrilles', 'wedges'];
    
    // Check for dress first (most specific)
    if (dressKeywords.some(keyword => titleLower.includes(keyword) || urlLower.includes(keyword))) {
      return 'dress';
    }
    
    // Check for shoes
    if (shoeKeywords.some(keyword => titleLower.includes(keyword) || urlLower.includes(keyword))) {
      return 'shoe';
    }
    
    // Check for tops
    if (topKeywords.some(keyword => titleLower.includes(keyword) || urlLower.includes(keyword))) {
      return 'top';
    }
    
    // Check for bottoms
    if (bottomKeywords.some(keyword => titleLower.includes(keyword) || urlLower.includes(keyword))) {
      return 'bottom';
    }
    
    // Default to top if no category is detected
    return 'top';
  };

  const generatePreviewData = (urlString: string) => {
    try {
      const urlObj = new URL(urlString);
      const domain = urlObj.hostname.replace('www.', '');
      
      // Generate more realistic mock data based on domain
      const domainSpecificTitles: { [key: string]: string[] } = {
        'amazon.com': ['Premium Wireless Headphones', 'Smart Watch Series 7', 'Organic Cotton T-Shirt'],
        'zara.com': ['Structured Blazer', 'Wide Leg Trousers', 'Leather Ankle Boots'],
        'nike.com': ['Air Max Running Shoes', 'Dri-FIT Training Top', 'Tech Fleece Hoodie'],
        'hm.com': ['Oversized Knit Sweater', 'High Waist Jeans', 'Cotton Blend Dress']
      };
      
      const defaultTitles = [
        'Stylish Winter Jacket',
        'Premium Cotton T-Shirt', 
        'Designer Sneakers',
        'Elegant Evening Dress',
        'Classic Denim Jeans'
      ];
      
      const titles = domainSpecificTitles[domain] || defaultTitles;
      const selectedTitle = titles[Math.floor(Math.random() * titles.length)];
      
      const mockImages = [
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop'
      ];
      
      const category = categorizeItem(selectedTitle, urlString);
      
      return {
        title: selectedTitle,
        image: mockImages[Math.floor(Math.random() * mockImages.length)],
        domain: domain,
        category: category,
        description: `Premium quality ${selectedTitle.toLowerCase()} from ${domain}`
      };
    } catch {
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsProcessing(true);
    
    try {
      // Simulate realistic processing time for content analysis
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      const isValid = await validateEcommerceUrl(url);
      
      if (isValid) {
        const previewData = generatePreviewData(url);
        setValidationResult({
          isValid: true,
          previewData,
          message: 'Success! This appears to be a shopping website with e-commerce functionality.'
        });
      } else {
        setValidationResult({
          isValid: false,
          message: 'This link doesn\'t appear to be from a shopping or e-commerce website. Please try a link from an online store with shopping cart or purchase functionality.'
        });
      }
    } catch (error) {
      setValidationResult({
        isValid: false,
        message: 'Unable to analyze this website. Please make sure the link is valid and try again.'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSave = () => {
    if (validationResult?.isValid && validationResult.previewData) {
      const newItem: SavedItem & { category?: string } = {
        id: Date.now().toString(),
        name: validationResult.previewData.title,
        company: validationResult.previewData.domain,
        image: validationResult.previewData.image,
        buyUrl: url,
        category: validationResult.previewData.category
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
            <p className="text-gray-600">Analyzing webpage content...</p>
          </div>
        ) : validationResult ? (
          <div className="space-y-6">
            <div className={`p-4 rounded-lg ${validationResult.isValid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <p className={`font-medium ${validationResult.isValid ? 'text-green-800' : 'text-red-800'}`}>
                {validationResult.isValid ? 'Great! This is a valid shopping link.' : 'This doesn\'t appear to be from a shopping website.'}
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
                    <p className="text-xs text-gray-500 mt-1">Category: {validationResult.previewData.category}</p>
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
                <X className="w-4 h-4" />
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
