import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, ShoppingCart, Star, Download, Eye } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast.jsx';

const ProductsSection = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Бүгд');
  const { toast } = useToast();

  const showToast = (e) => {
    e.stopPropagation(); 
    e.preventDefault();
    toast({
      title: "🚧 Энэ функц хараахан хэрэгжээгүй байна",
      description: "Дараагийн хүсэлтэндээ энэ функцийг хүсээрэй! 🚀",
    });
  };

  const categories = ['Бүгд', 'Autodesk', 'Вирусны хамгаалалт', 'Оффис программ', 'График Дизайн', 'Үйлдлийн систем'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Бүгд' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Шилдэг программ хангамж
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Мэргэжлийн хөгжүүлэгчдийн бүтээсэн, олон мянган хэрэглэгчийн итгэсэн программууд
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 w-full lg:w-auto lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Программ хайх..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all text-sm md:text-base ${selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/product/${product.id}`} className="block hover:opacity-90 transition-opacity">
                <div className="relative">
                  {product.image_src ? (
                    <img
                      className="w-full h-48 object-cover"
                      alt={product.name}
                      src={product.image_src}
                    />
                  ) : (
                    <img 
                      className="w-full h-48 object-cover"
                      alt={product.name}
                     src="https://images.unsplash.com/photo-1671376354106-d8d21e55dddd" />
                  )}
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {product.badge}
                    </div>
                  )}
                  <button
                    className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    onClick={showToast}
                    aria-label="Сагсанд нэмэх"
                  >
                    <ShoppingCart className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </Link>

              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                  </div>
                </div>
                <Link to={`/product/${product.id}`} className="block hover:text-blue-700 transition-colors">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 truncate" title={product.name}>{product.name}</h3>
                </Link>
                <p className="text-gray-600 mb-3 text-sm h-10 overflow-hidden">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {product.features.slice(0,3).map((feature, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                 <div className="mb-3">
                    <span className="text-xs font-semibold text-gray-500">ЛИЦЕНЗ: {product.licenseType}</span>
                  </div>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start gap-0">
                      <span className="text-xl sm:text-2xl font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                       <Link to={`/product/${product.id}`}>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-blue-600 text-blue-600 hover:bg-blue-50"
                          aria-label="Дэлгэрэнгүй харах"
                        >
                          <Eye className="w-5 h-5" />
                        </Button>
                      </Link>
                      <Button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-3"
                        onClick={showToast}
                        aria-label="Худалдаж авах"
                      >
                        <Download className="w-4 h-4 mr-0 sm:mr-2" />
                        <span className="hidden sm:inline text-sm">Авах</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">Уучлаарай, таны хайлтад тохирох бүтээгдэхүүн олдсонгүй.</p>
            <p className="text-gray-500">Хайлтын үгээ өөрчлөх эсвэл ангиллаа шалгана уу.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;