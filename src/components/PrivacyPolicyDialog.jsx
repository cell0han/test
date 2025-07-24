import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Helmet } from 'react-helmet';

const PrivacyPolicyDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <Helmet>
        <title>Нууцлалын Бодлого - BlessedSoftware</title>
        <meta name="description" content="BlessedSoftware-ийн нууцлалын бодлого. Хэрэглэгчийн мэдээллийг хэрхэн цуглуулж, ашиглаж, хамгаалдаг тухай." />
      </Helmet>
      <DialogContent className="sm:max-w-[700px] h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-blue-700">Нууцлалын Бодлого</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Энэхүү баримт бичигт таны мэдээллийг хэрхэн цуглуулж, ашиглаж, хамгаалдаг тухай тайлбарласан болно.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar">
          <p className="mb-4 text-gray-700">
            Бидний вэбсайтыг ашигласнаар та энэхүү нууцлалын бодлогыг хүлээн зөвшөөрч байна. Хэрэв та манай нууцлалын бодлогын аль нэг нөхцөлийг хүлээн зөвшөөрөхгүй бол манай вэбсайтыг ашиглахаа зогсооно уу.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-blue-600">1. Бид ямар мэдээлэл цуглуулдаг вэ?</h2>
          <p className="mb-4 text-gray-700">
            Бид таныг вэбсайтаар зочлох эсвэл манай үйлчилгээг ашиглах үед танаас хэд хэдэн төрлийн мэдээллийг цуглуулдаг. Үүнд:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 pl-4">
            <li><strong>Хувийн мэдээлэл:</strong> Таны нэр, имэйл хаяг, утасны дугаар, хаяг зэрэг мэдээлэл таныг бүртгүүлэх, захиалга хийх эсвэл бидэнтэй холбогдоход цуглуулж болно.</li>
            <li><strong>Хэрэглээний мэдээлэл:</strong> Вэбсайтад хандах цаг хугацаа, IP хаяг, ашигласан хөтөч, зочилсон хуудас зэрэг мэдээллийг автоматаар цуглуулдаг.</li>
            <li><strong>Күүкийн мэдээлэл:</strong> Бид күүкийг ашиглан таны сонголтыг хадгалах, вэбсайтын хэрэглээг ойлгох, үйлчилгээгээ сайжруулах зорилгоор мэдээлэл цуглуулдаг.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-3 text-blue-600">2. Бид таны мэдээллийг хэрхэн ашигладаг вэ?</h2>
          <p className="mb-4 text-gray-700">
            Бид цуглуулсан мэдээллийг дараах зорилгоор ашигладаг:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 pl-4">
            <li>Таны захиалгыг боловсруулах, үйлчилгээ үзүүлэх.</li>
            <li>Таны асуултад хариулах, дэмжлэг үзүүлэх.</li>
            <li>Вэбсайтын үйл ажиллагааг сайжруулах, хэрэглэгчийн туршлагыг өөрчлөх.</li>
            <li>Сурталчилгааны болон маркетингийн мэдээлэл илгээх (хэрэв та зөвшөөрсөн бол).</li>
            <li>Хууль тогтоомжийн шаардлагыг хангах.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-3 text-blue-600">3. Мэдээлэл хуваалцах</h2>
          <p className="mb-4 text-gray-700">
            Бид таны хувийн мэдээллийг таны зөвшөөрөлгүйгээр гуравдагч этгээдэд худалдах, түрээслэх эсвэл хуваалцахгүй. Гэхдээ бид үйлчилгээгээ үзүүлэхэд шаардлагатай түнш байгууллагуудтай мэдээллийг хуваалцаж болно. Эдгээр түншүүд нь мэдээллийн нууцлалыг чандлан сахих үүрэгтэй.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-blue-600">4. Мэдээллийн аюулгүй байдал</h2>
          <p className="mb-4 text-gray-700">
            Бид таны мэдээллийг хамгаалахын тулд зохистой аюулгүй байдлын арга хэмжээг авдаг. Гэсэн хэдий ч интернэтээр дамжуулсан мэдээлэл 100% аюулгүй байх баталгаагүй тул та өөрийн эрсдэлийг хариуцна.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-blue-600">5. Таны эрх</h2>
          <p className="mb-4 text-gray-700">
            Та өөрийн мэдээлэлд хандах, засварлах, устгуулах эрхтэй. Мөн та маркетингийн мэдээлэл хүлээн авахаас татгалзаж болно. Эдгээр эрхээ хэрэгжүүлэхийн тулд бидэнтэй холбогдоно уу.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-blue-600">6. Нууцлалын бодлогын өөрчлөлт</h2>
          <p className="mb-4 text-gray-700">
            Бид энэхүү нууцлалын бодлогыг үе үе шинэчилж болно. Шинэчилсэн хувилбарыг энэ хуудсанд нийтэлж, хүчин төгөлдөр болсон огноог заана.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-blue-600">7. Холбоо барих</h2>
          <p className="mb-4 text-gray-700">
            Нууцлалын бодлогын талаар асуух зүйл байвал бидэнтэй холбогдоно уу:
          </p>
          <p className="mb-4 text-gray-700">
            Имэйл: <a href="mailto:info@getblessedsoft.com" className="text-blue-500 hover:underline">info@getblessedsoft.com</a><br />
            Утас: 7676-9800, 90-305-105
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;