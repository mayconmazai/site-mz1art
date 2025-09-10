import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import mz1FullLogo from "figma:asset/4cea5d5db742e31f53138d858a7c1efaa3376a34.png";

export default function Header() {
  return (
    <header className="bg-gradient-to-tr from-[#121EA8] to-[#BD31F5] text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Logo and background (stacked above on mobile, beside on sm and above) */}
            <div className="relative flex items-center justify-center">
              <div className="bg-gradient-to-l from-transparent to-white rounded-[100%] scale-80 absolute z-0 w-[calc(115%+0.125rem)] h-[calc(140%+0.125rem)] shadow-[0_0_60px_rgba(0,0,0,0.500)]"></div>
              <img
                src={mz1FullLogo}
                alt="MZ1 ART Logo"
                className="w-auto h-64 relative z-10"
              />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold tracking-tight">
                Transformando ideias em soluções tecnológicas!
              </h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items=center gap-4 text-sm">
            <div className="flex items-center gap-2">
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp size={16} className="text-purple-200" />
              <a
                href="https://wa.me/5541991374732?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20MZ1%20ART."
                className="hover:text-purple-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-purple-200" />
              <a
                href="mailto:maycon@mz1art.com"
                className="hover:text-purple-100 transition-colors"
              >
                maycon@mz1art.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}