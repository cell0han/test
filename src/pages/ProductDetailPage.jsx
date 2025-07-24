
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Star, CheckCircle, ShoppingCart, ArrowLeft, Info } from 'lucide-react';

const LongDescriptionRenderer = ({ text }) => {
  if (!text) return null;

  const sections = text.split(/\n---\n/);

  const renderParagraph = (paragraph, pIndex) => {
    if (paragraph.includes('|')) {
      const lines = paragraph.trim().split('\n');
      if (lines.length > 1 && lines[1].includes('---')) {
        const headers = lines[0].split('|').map(h => h.trim()).filter(Boolean);
        const rows = lines.slice(2).map(row => row.split('|').map(cell => cell.trim()).filter(Boolean));
        
        if (headers.length > 0 && rows.length > 0) {
          return (
            <div key={pIndex} className="my-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    {headers.map((header, hIndex) => (
                      <th key={hIndex} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider" dangerouslySetInnerHTML={{ __html: header.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rows.map((row, rIndex) => (
                    <tr key={rIndex} className="hover:bg-gray-50">
                      {row.map((cell, cIndex) => (
                        <td key={cIndex} className="px-6 py-4 whitespace-normal text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/✅/g, '<span class="text-green-500">✅</span>').replace(/❌/g, '<span class="text-red-500">❌</span>') }}></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
      }
    }

    if (paragraph.startsWith('#### ')) {
        return <h4 key={pIndex} className="font-semibold text-xl mt-5 mb-2" dangerouslySetInnerHTML={{ __html: paragraph.replace('#### ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
    }
    if (paragraph.startsWith('### ')) {
      return <h3 key={pIndex} className="font-semibold text-2xl mt-6 mb-3" dangerouslySetInnerHTML={{ __html: paragraph.replace('### ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
    }
    if (paragraph.match(/^\s*-\s/m)) {
      const items = paragraph.split('\n');
      return (
        <ul key={pIndex} className="list-disc list-inside space-y-2 my-4 pl-2">
          {items.map((item, i) => <li key={i} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/-\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>)}
        </ul>
      );
    }
    if (paragraph.startsWith('> ')) {
      return (
        <blockquote key={pIndex} className="pl-4 italic border-l-4 border-blue-300 my-4 text-gray-600 bg-blue-50 p-4 rounded-r-lg" dangerouslySetInnerHTML={{ __html: paragraph.replace('> ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      );
    }
    return <p key={pIndex} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
  };

  return (
    <div className="prose prose-slate max-w-none prose-sm lg:prose-base">
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          {section.split(/\n\n/).map(renderParagraph)}
          {index < sections.length - 1 && <hr className="my-8 border-gray-200" />}
        </React.Fragment>
      ))}
    </div>
  );
};


const ProductDetailPage = ({ products }) => {
  const { productId } = useParams();
  const location = useLocation();
  const product = products.find(p => p.id === parseInt(productId));

  const [selectedVersion, setSelectedVersion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(location.search);
    const versionId = params.get('version');
    if (product && product.versions) {
      const initialVersion = versionId ? product.versions.find(v => v.id === versionId) : product.versions[0];
      setSelectedVersion(initialVersion);
    } else {
      setSelectedVersion(null);
    }
  }, [productId, product, location.search]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">404</h1>
          <p className="text-lg text-gray-600">Бүтээгдэхүүн олдсонгүй.</p>
          <Link to="/">
            <Button className="mt-4">Нүүр хуудас руу буцах</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "🛒 Сагсанд нэмлээ!",
      description: `${selectedVersion ? selectedVersion.name : product.name} таны сагсанд орлоо.`,
    });
  };

  const displayPrice = selectedVersion ? selectedVersion.price : product.price;
  const displayOriginalPrice = product.originalPrice;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group">
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Бүтээгдэхүүний жагсаалт руу буцах
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-2xl shadow-lg overflow-hidden sticky top-24">
            <img
              src={product.image_src}
              alt={product.image_description}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {product.badge && (
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full mb-2">
              {product.badge}
            </span>
          )}
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-600 ml-2">({product.reviews} сэтгэгдэл)</span>
          </div>
          <p className="text-gray-600 text-lg mb-6">{product.description}</p>

          {product.versions && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Хувилбар сонгох:</h3>
              <div className="space-y-3">
                {product.versions.map(version => (
                  <div
                    key={version.id}
                    onClick={() => setSelectedVersion(version)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${selectedVersion?.id === version.id ? 'border-blue-500 ring-2 ring-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-800">{version.name}</h4>
                        <p className="text-sm text-gray-600 mt-2">{version.description}</p>
                      </div>
                      <p className="font-bold text-lg text-blue-600 whitespace-nowrap pl-4">{version.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-4xl font-bold text-gray-900">{displayPrice}</span>
              {displayOriginalPrice && (
                <span className="text-xl text-gray-500 line-through">{displayOriginalPrice}</span>
              )}
            </div>
            <Button size="lg" className="w-full text-lg" onClick={handleAddToCart}>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Сагсанд нэмэх
            </Button>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Онцлог шинж чанарууд:</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="mt-16">
        <div className="border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 py-4">Бүтээгдэхүүний дэлгэрэнгүй</h2>
        </div>
        <div className="py-8">
          <LongDescriptionRenderer text={product.longDescription} />
        </div>
      </div>
      
      <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center"><Info className="w-6 h-6 mr-3 text-blue-600" />Системийн шаардлага</h2>
        <div className="text-gray-700 space-y-3">
          <p>{product.systemRequirements}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;
