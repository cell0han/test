import React from 'react';
import { Users, Smartphone, Facebook, Instagram, Mail } from 'lucide-react'; // Import Mail icon
import { useToast } from '@/components/ui/use-toast.jsx';

const Footer = ({ openContactDialog, openAboutUsDialog, openPrivacyPolicyDialog }) => { // Add openPrivacyPolicyDialog prop
  const { toast } = useToast();
  const showToast = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Энэ функц хараахан хэрэгжээгүй байна",
      description: "Дараагийн хүсэлтэндээ энэ функцийг хүсээрэй! 🚀",
    });
  };

  const footerLinks = {
    product: [
      // { label: 'Дизайн багаж', href: '#' }, // Removed as per user request
    ],
    company: [
      { label: 'Бидний тухай', onClick: openAboutUsDialog },
      { label: 'Мэдээ', href: '#' },
      { label: 'Холбоо барих', onClick: openContactDialog },
    ],
    support: [
      { label: 'Тусламжийн төв', href: '#' },
      // Update Privacy Policy link to open dialog
      { label: 'Нууцлалын бодлого', onClick: openPrivacyPolicyDialog }, 
    ],
  };

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-16"> {/* Adjusted padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left"> {/* Centered text for small screens */}
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 md:mb-6"> {/* Centered logo for small screens */}
              <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/47d4c7dc-84b3-4814-b1cd-aa1b50b7eaca/2ba96545b6377dd76a764b39f695d41c.jpg" alt="BlessedSoftware Logo" className="h-8 md:h-10 w-auto" /> {/* Adjusted image size */}
              <span className="text-xl md:text-2xl font-bold">BlessedSoftware</span> {/* Adjusted font size */}
            </div>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base"> {/* Adjusted font size */}
              Программ хангамжийн шилдэг дэлгүүр. Таны бизнесийн амжилтын түнш.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 md:space-x-4"> {/* Centered icons for small screens */}
              <a href="https://www.facebook.com/BlessedSoftwareLLC" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"> {/* Adjusted icon size */}
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://www.instagram.com/getblessedsoftware/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"> {/* Adjusted icon size */}
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="mailto:info@getblessedsoft.com" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"> {/* Adjusted icon size */}
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" onClick={showToast}> {/* Adjusted icon size */}
                <Users className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" onClick={showToast}> {/* Adjusted icon size */}
                <Smartphone className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <span className="text-base md:text-lg font-semibold mb-3 md:mb-6 block">Бүтээгдэхүүн</span> {/* Adjusted font size */}
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base"> {/* Adjusted font size and spacing */}
              {footerLinks.product.map(link => (
                <li key={link.label}><a href={link.href} className="text-gray-400 hover:text-white transition-colors" onClick={showToast}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <span className="text-base md:text-lg font-semibold mb-3 md:mb-6 block">Компани</span> {/* Adjusted font size */}
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base"> {/* Adjusted font size and spacing */}
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  {link.onClick ? ( // Check if onClick exists
                    <button type="button" className="text-gray-400 hover:text-white transition-colors text-left" onClick={(e) => { e.preventDefault(); link.onClick(); }}>{link.label}</button>
                  ) : (
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors" onClick={showToast}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <span className="text-base md:text-lg font-semibold mb-3 md:mb-6 block">Дэмжлэг</span> {/* Adjusted font size */}
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base"> {/* Adjusted font size and spacing */}
              {footerLinks.support.map(link => (
                <li key={link.label}>
                  {link.onClick ? ( // Check if onClick exists
                    <button type="button" className="text-gray-400 hover:text-white transition-colors text-left" onClick={(e) => { e.preventDefault(); link.onClick(); }}>{link.label}</button>
                  ) : (
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors" onClick={showToast}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-4 md:pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm md:text-base"> {/* Adjusted padding and font size */}
          <p className="text-gray-400 order-2 md:order-1 mt-4 md:mt-0">
            © {new Date().getFullYear()} BlessedSoftware. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 order-1 md:order-2"> {/* Adjusted spacing */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors" onClick={showToast}>Үйлчилгээний нөхцөл</a>
            {/* The Privacy Policy link now triggers the dialog via onClick */}
            <button type="button" className="text-gray-400 hover:text-white transition-colors" onClick={openPrivacyPolicyDialog}>Нууцлалын бодлого</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;