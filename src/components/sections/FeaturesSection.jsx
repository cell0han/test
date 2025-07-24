import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Headphones, Award } from 'lucide-react';

const featuresData = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Найдвартай аюулгүй байдал',
    description: '' // Таны хүсэлтээр устгав
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Хурдан татаж авах',
    description: 'Албан ёсны сайтаас татах, элдэв янзын сайтаас татаж крак уншуулахгүй' // Таны хүсэлтээр өөрчлөв
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: '24/7 дэмжлэг',
    description: 'Мэргэжлийн баг танд 24 цагийн турш туслахад бэлэн'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Чанарын баталгаа',
    description: 'Бүх программ хангамж нь олон улсын стандартад нийцсэн'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Яагаад биднийг сонгох ёстой вэ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Бид зөвхөн программ хангамж зардаггүй, харин таны амжилтын түнш болдог
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card p-6 sm:p-8 rounded-2xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;