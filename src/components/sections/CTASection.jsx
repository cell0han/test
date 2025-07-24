import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast.jsx';

const CTASection = () => {
  const { toast } = useToast();
  const showToast = () => {
    toast({
      title: "🚧 Энэ функц хараахан хэрэгжээгүй байна",
      description: "Дараагийн хүсэлтэндээ энэ функцийг хүсээрэй! 🚀",
    });
  };
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Өнөөдөр эхлээрэй!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Мянга мянган хэрэглэгчтэй нэгдээд таны бизнесийг дараагийн түвшинд хүргээрэй
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              onClick={showToast}
            >
              Үнэгүй эхлэх
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;