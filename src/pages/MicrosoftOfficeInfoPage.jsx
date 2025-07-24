import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ArrowLeft, CheckSquare, FileText, Briefcase, Users, Key, HelpCircle, BookOpen, ShoppingCart, Download, Tag, ShieldCheck, UserCheck, Repeat } from 'lucide-react';
import { products } from '@/data/products';

const MicrosoftOfficeInfoPage = () => {
  const officeProduct = products.find(p => p.id === 7); 

  const showToast = (message = "🚧 Энэ функц хараахан хэрэгжээгүй байна", description = "Дараагийн хүсэлтэндээ энэ функцийг хүсээрэй! 🚀") => {
    toast({
      title: message,
      description: description,
    });
  };

  const getLicenseIcon = (licenseType) => {
    switch(licenseType?.toLowerCase()){
      case 'volume':
        return <ShieldCheck className="w-5 h-5 mr-2 text-red-600"/>;
      case 'oem':
        return <UserCheck className="w-5 h-5 mr-2 text-green-600"/>;
      case 'retail':
        return <Repeat className="w-5 h-5 mr-2 text-blue-600"/>;
      default:
        return <Tag className="w-5 h-5 mr-2"/>;
    }
  }

  const sections = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: 'Microsoft Office 2021 гэж юу вэ?',
      content: (
        <>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Microsoft Office 2021</strong> нь <strong>нэг удаа худалдан авч ашигладаг</strong>, оффисын үндсэн програмуудын шинэ хувилбар юм. Энэ нь <strong>интернетгүйгээр ажилладаг</strong>, <strong>сүүлд шинэчлэгдэх шаардлагагүй</strong> хувилбар бөгөөд дараах хэрэглээнд зориулагдсан:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 pl-4">
            <li>📂 Ажлын баримт бичиг боловсруулах</li>
            <li>🧾 Тайлан, хүснэгт гаргах</li>
            <li>📊 Хурал, төсөл, танилцуулга бэлтгэх</li>
            <li>💌 Имэйл менежмент хийх</li>
          </ul>
        </>
      ),
    },
    {
      icon: <CheckSquare className="w-8 h-8 text-green-600" />,
      title: 'Microsoft Office 2021 багцад багтдаг програмууд',
      content: (
        <>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Microsoft Office 2021 нь таны сонгосон <strong>хувилбараас</strong> шалтгаалж дараах <strong>програмуудын багцыг</strong> агуулдаг. Эдгээр програм бүр өөр өөр чиглэлд зориулсан, өдөр тутмын ажлыг хялбарчлах зорилготой байдаг.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">🗂️ Microsoft Office 2021 багцад багтдаг гол программууд</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Програм</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Тайлбар</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Зориулалт</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { name: '✅ Word 2021', desc: 'Баримт бичиг боловсруулах', purpose: 'Тайлан, CV, хүсэлт, бичиг' },
                  { name: '✅ Excel 2021', desc: 'Хүснэгт, тооцоо, томъёо', purpose: 'Санхүү, судалгаа, төлөвлөгөө' },
                  { name: '✅ PowerPoint 2021', desc: 'Танилцуулга бэлтгэх', purpose: 'Сургалт, хурал, төсөл' },
                  { name: '✅ Outlook 2021', desc: 'Имэйл, календарь, хуваарь', purpose: 'Имэйл удирдах, уулзалт төлөвлөх' },
                  { name: '✅ OneNote 2021', desc: 'Дижитал тэмдэглэл', purpose: 'Сургалтын тэмдэглэл, санаа, судалгаа' },
                  { name: '✅ Teams (үнэгүй хувилбар)', desc: 'Харилцаа, онлайн уулзалт', purpose: 'Багийн хамтын ажиллагаа' },
                ].map(item => (
                  <tr key={item.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.desc}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">🧑‍💼 Зарим хувилбарт нэмэгддэг программууд</h3>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Програм</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Тайлбар</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Зориулалт</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { name: '🔸 Publisher 2021', desc: 'График хэвлэлийн эх бэлтгэл', purpose: 'Сурталчилгаа, флаер, постер хийх' },
                  { name: '🔸 Access 2021', desc: 'Өгөгдлийн сан зохион байгуулах', purpose: 'Мэдээллийн бүртгэл, анализ хийх' },
                ].map(item => (
                  <tr key={item.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.desc}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-yellow-800 bg-yellow-100 p-3 rounded-md border border-yellow-200">
            ⚠️ <strong>Publisher</strong> ба <strong>Access</strong> нь зөвхөн <strong>Office Professional 2021</strong> эсвэл <strong>Volume лицензтэй хувилбарууд</strong> дээр байдаг.
          </p>
        </>
      ),
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      title: 'Онцлог, шинэ боломжууд (Office 2021 vs Office 2019)',
      content: (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Шинэ боломж</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Тайлбар</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { feature: '✅ Dark Mode', desc: 'Нүд ядраахаас сэргийлсэн харанхуй горим' },
                { feature: '✅ Excel-ийн шинэ томъёонууд', desc: 'XLOOKUP, LET, XMATCH гэх мэт шинэ функцүүд' },
                { feature: '✅ Dynamic Arrays', desc: 'Нэг томъёогоор олон үр дүн гаргах' },
                { feature: '✅ PowerPoint Slide Show Record сайжруулсан', desc: 'Камер, дуу, бичлэгийг шууд хийх боломж' },
                { feature: '✅ Microsoft Teams интеграци', desc: 'Хурал, харилцааг илүү хялбар болгосон' },
                { feature: '✅ Үсгийн шинэчилсэн багц, icon design', desc: 'Орчин үеийн UI/UX сайжруулалт' },
              ].map(item => (
                <tr key={item.feature}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.feature}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      title: 'Microsoft Office 2021-ийн төрлүүд',
      content: (
        <>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Хувилбар</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Зориулалт</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Онцлог</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { version: 'Office Home & Student 2021', purpose: 'Гэр болон сурагчдад', features: 'Word, Excel, PowerPoint' },
                  { version: 'Office Home & Business 2021', purpose: 'Жижиг бизнес, албан байгууллагад', features: 'Outlook нэмэгдсэн' },
                  { version: 'Office Professional 2021', purpose: 'Бүрэн багц хэрэгтэй хэрэглэгчид', features: 'Access, Publisher нэмэгдсэн' },
                ].map(item => (
                  <tr key={item.version}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.version}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.purpose}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {officeProduct && officeProduct.versions && (
            <div className="grid md:grid-cols-3 gap-6">
              {officeProduct.versions.map(version => (
                <motion.div
                  key={version.id}
                  className="border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow bg-white flex flex-col justify-between"
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <div className="flex items-center mb-2">
                      {getLicenseIcon(version.licenseType)}
                      <h4 className="text-xl font-semibold text-blue-700">{version.name.replace('Microsoft Office 2021 ', '')}</h4>
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mb-3">{version.price}</p>
                    <p className="text-sm text-gray-600 mb-3">{version.description}</p>
                    <ul className="space-y-1 text-sm text-gray-600 mb-4">
                      {version.features.map(f => <li key={f} className="flex items-center"><CheckSquare className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />{f}</li>)}
                    </ul>
                  </div>
                  <Link to={`/product/${officeProduct.id}?version=${version.id}`} className="w-full">
                    <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <ShoppingCart className="w-4 h-4 mr-2" /> Худалдаж авах
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </>
      ),
    },
    {
      icon: <Key className="w-8 h-8 text-indigo-600" />,
      title: 'Лиценз ба ашиглалт',
      content: (
        <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
          <li>Нэг удаа худалдан авдаг (perpetual license)</li>
          <li>Интернэтгүй ажилладаг (суулгасны дараа идэвхжүүлсэн байхад)</li>
          <li>Microsoft акаунттай холбогддог (зарим хувилбарт)</li>
          <li>Лиценз зөвхөн <strong>нэг төхөөрөмжид</strong> зориулагдсан (зарим хувилбарт)</li>
        </ul>
      ),
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-teal-600" />,
      title: 'Хэрэгтэй зөвлөгөө, заавар',
      content: (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Тусламж</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Тайлбар</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { topic: '🛒 Худалдан авах', desc: 'Microsoft.com, лицензтэй борлуулагчдаас авна' },
                { topic: '💻 Суулгах', desc: 'Microsoft акаунтаар нэвтрэн, install товчоор татаж суулгана' },
                { topic: '🔐 Идэвхжүүлэх', desc: 'Product key ашиглан эсвэл акаунтаар холбох' },
                { topic: '🌐 Office 365-тай ялгаа', desc: 'Office 365 нь сар/жилээр төлдөг, Office 2021 нь нэг удаа л төлнө' },
              ].map(item => (
                <tr key={item.topic}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.topic}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      icon: <BookOpen className="w-8 h-8 text-pink-600" />,
      title: 'Суралцах эх үүсвэрүүд',
      content: (
        <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
          <li><a href="https://support.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">support.microsoft.com</a> – Албан ёсны тусламж</li>
          <li>YouTube – Word, Excel, PowerPoint сургалтын бичлэгүүд</li>
          <li>Mongolian Facebook Groups – “Excel хэрэглэгчид”, “Office хэрэглэгчид” гэх мэт</li>
        </ul>
      ),
    },
  ];

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
          Нүүр хуудас руу буцах
        </Link>
      </div>

      <header className="mb-12 text-center">
        <motion.h1 
          className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Microsoft Office 2021
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <img  
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/47d4c7dc-84b3-4814-b1cd-aa1b50b7eaca/128fb0b7eb5a05e90f031f6aba3cc7f0.png" 
            alt="Microsoft Office 2021 Professional Plus box art" 
            className="rounded-lg shadow-xl max-h-80 object-contain"
          />
        </motion.div>
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Таны ажлын бүтээмжийг нэмэгдүүлэх оффисын иж бүрэн програм хангамж.
        </motion.p>
      </header>

      <div className="space-y-12">
        {sections.map((section, index) => (
          <motion.section
            key={index}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              {section.icon}
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 ml-4">{section.title}</h2>
            </div>
            <div className="prose prose-slate prose-lg max-w-none text-gray-700 marker:text-sky-400">
              {typeof section.content === 'string' ? <p dangerouslySetInnerHTML={{ __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} /> : section.content}
            </div>
          </motion.section>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-xl shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">Microsoft Office 2021-г авах уу?</h2>
        <p className="text-lg text-blue-100 mb-6 max-w-xl mx-auto">
          Өөрт тохирох хувилбараа сонгоод ажлаа хөнгөвчил!
        </p>
        <Link to={`/product/${officeProduct ? officeProduct.id : '7'}`}>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            <Download className="w-5 h-5 mr-2" /> Хувилбаруудтай танилцах
          </Button>
        </Link>
      </motion.div>

      <motion.div 
        className="mt-12 text-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p>Та хэрвээ <strong>Excel томъёо, Word дээр бичиг баримт форматлах, PowerPoint танилцуулга хийх гэх мэт</strong> тодорхой ажил хийх гэж байгаа бол хэлээрэй — би алхам алхмаар тусламж үзүүлж чадна.</p>
      </motion.div>

    </motion.div>
  );
};

export default MicrosoftOfficeInfoPage;