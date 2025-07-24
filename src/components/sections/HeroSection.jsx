import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react'; // Check icon-ийг импортлов

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Найдвартай байдал
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mt-6 leading-relaxed">
              Мэргэжлийн программ хангамж, найдвартай үйлчилгээ, хурдан татаж авах боломж.
              Таны бизнесийг дараагийн түвшинд хүргэх бүх зүйл энд байна.
              Бид Microsoft, Adobe, Autodesk зэрэг дэлхийд танигдсан брэндүүдийн албан ёсны програм хангамжийг найдвартайгаар нийлүүлдэг.
            </p>
            <ul className="text-lg sm:text-xl text-gray-600 mt-4 leading-relaxed list-none space-y-2 inline-block text-left">
              <li className="flex items-center"><Check className="mr-2 w-6 h-6 text-green-500 flex-shrink-0" />Зөвшөөрөгдсөн лиценз</li>
              <li className="flex items-center"><Check className="mr-2 w-6 h-6 text-green-500 flex-shrink-0" />Хамгийн сүүлийн хувилбарууд</li>
              <li className="flex items-center"><Check className="mr-2 w-6 h-6 text-green-500 flex-shrink-0" />Багцын оновчтой шийдэл</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
                onClick={scrollToProducts}
              >
                Бүтээгдэхүүнтэй танилцах
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10">
              <img 
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
                alt="Software development dashboard with abstract background elements"
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/47d4c7dc-84b3-4814-b1cd-aa1b50b7eaca/5ef6f443b4b9b4e7ae53c33d117d1b72.png" />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse-slow"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;