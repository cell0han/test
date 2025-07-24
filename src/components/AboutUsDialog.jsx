import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog.jsx';

const AboutUsDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">🏢 Компани – Бидний тухай</DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            <p className="mb-4">
              <strong>BLESSED LLC</strong> нь программ хангамжийн худалдаа, нийлүүлэлтийн салбарт 5 дахь жилдээ тасралтгүй, найдвартай үйл ажиллагаа явуулж буй туршлагатай компани юм. Бид Adobe, Microsoft, Trend Micro, Bitdefender, Kaspersky, ESET, Autodesk зэрэг дэлхийд тэргүүлэгч брэндүүдийн албан ёсны лицензтэй бүтээгдэхүүнийг хэрэглэгчдэд шуурхай, найдвартай хүргэж байна.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">🔹 Эрхэм зорилго:</h3>
            <p className="mb-4">
              Хэрэглэгчдэд мэдээллийн аюулгүй байдал, бүтээмжийг дэмжсэн чанартай программ хангамжийг албан ёсоор хүргэх.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">🔹 Үнэт зүйлс:</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Найдвартай байдал</li>
              <li>Түргэн шуурхай үйлчилгээ</li>
              <li>Хэрэглэгчийн сэтгэл ханамж</li>
              <li>Хууль ёсны лиценз, хамгаалалт</li>
            </ul>

            <p className="mb-4">
              Манай хамт олон хэрэглэгч бүрт мэргэжлийн зөвлөгөө өгөхөөс гадна, худалдан авалтын дараах дэмжлэг, суурилуулалт, хэрэглээний зөвлөмжийг бүрэн хүргэдэг.
            </p>

            <p className="text-gray-700 font-medium">
              Холбоо барих утас: <a href="tel:76769800" className="text-blue-600 hover:underline">7676-9800</a>, <a href="tel:90305105" className="text-blue-600 hover:underline">90-305-105</a>
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AboutUsDialog;