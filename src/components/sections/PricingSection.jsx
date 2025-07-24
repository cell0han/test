import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Info } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast.jsx';

const initialPricingPlansData = [
  {
    name: 'Үндсэн Багц',
    price: '₮50,000',
    period: '/сар',
    description: 'Жижиг бизнест тохиромжтой',
    features: [
      '5 хүртэл программ',
      'Үндсэн дэмжлэг',
      'Сарын шинэчлэлт',
      'Email дэмжлэг'
    ],
    popular: false,
    type: 'subscription'
  },
  {
    name: 'Мэргэжлийн Багц',
    price: '₮120,000',
    period: '/сар',
    description: 'Дунд зэргийн бизнест тохиромжтой',
    features: [
      '20 хүртэл программ',
      'Тэргүүлэх дэмжлэг',
      'Долоо хоногийн шинэчлэлт',
      'Утас болон email дэмжлэг',
      'Нэмэлт хадгалах сан'
    ],
    popular: true,
    type: 'subscription'
  },
  {
    name: 'Корпораци Багц',
    price: '₮300,000',
    period: '/сар',
    description: 'Том байгууллагад тохиромжтой',
    features: [
      'Хязгааргүй программ',
      'VIP дэмжлэг',
      'Өдөр тутмын шинэчлэлт',
      '24/7 утас дэмжлэг',
      'Хувийн менежер',
      'Тусгай сургалт'
    ],
    popular: false,
    type: 'subscription'
  }
];

const PricingSection = ({ products }) => {
  const { toast } = useToast();
  const showToast = () => {
    toast({
      title: "🚧 Энэ функц хараахан хэрэгжээгүй байна",
      description: "Дараагийн хүсэлтэндээ энэ функцийг хүсээрэй! 🚀",
    });
  };

  const officeProduct = products.find(p => p.id === 7 && p.versions);
  let pricingPlansData = [...initialPricingPlansData];

  if (officeProduct) {
    const officePlans = officeProduct.versions.map(version => ({
      name: version.name,
      price: version.price,
      period: '/нэг удаа',
      description: `Microsoft Office 2021-ийн ${version.name.toLowerCase()} хувилбар.`,
      features: [...version.features, 'Нэг удаагийн төлбөр', 'Нэг төхөөрөмжид'],
      popular: version.id === 'hb2021', 
      type: 'office',
      productId: officeProduct.id,
      versionId: version.id,
      pageLink: officeProduct.pageLink
    }));
    pricingPlansData = [...officePlans, ...initialPricingPlansData];
  }


  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Танд тохирох төлөвлөгөө сонгоорой
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Программ хангамжийн багц болон Microsoft Office 2021-ийн хувилбарууд.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlansData.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between ${plan.popular ? 'featured' : 'bg-gray-50 border'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      Хамгийн алдартай
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-3 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-3xl sm:text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`ml-1 text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-green-300' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-blue-100' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                {plan.type === 'office' && plan.pageLink && (
                  <Link to={plan.pageLink} className="block mb-3">
                    <Button
                      variant="outline"
                      className={`w-full ${plan.popular ? 'border-white text-white hover:bg-white/10' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
                    >
                      <Info className="w-4 h-4 mr-2" /> Дэлгэрэнгүй
                    </Button>
                  </Link>
                )}
                <Button
                  className={`w-full ${plan.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    }`}
                  onClick={plan.type === 'office' && plan.productId ? () => {
                    // Redirect to product page with version pre-selected or handle purchase
                    // For now, just a toast
                    toast({ title: `${plan.name} сонгогдлоо!`, description: "Худалдан авах функц удахгүй нэмэгдэнэ."});
                  } : showToast}
                >
                  Сонгох
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;