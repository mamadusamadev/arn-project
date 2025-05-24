
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Radio, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer 
      className="bg-primary text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Radio className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ARN</h3>
                <p className="text-sm opacity-90">Autoridade Reguladora Nacional</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A Autoridade Reguladora Nacional para as Tecnologias de Informação e Comunicação 
              da Guiné-Bissau, promovendo o desenvolvimento sustentável do setor das telecomunicações.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-gray-300 hover:text-accent transition-colors">Sobre a ARN</Link></li>
              <li><Link to="/regulamentacao" className="text-gray-300 hover:text-accent transition-colors">Regulamentação</Link></li>
              <li><Link to="/noticias" className="text-gray-300 hover:text-accent transition-colors">Notícias</Link></li>
              <li><Link to="/portal-cidadao" className="text-gray-300 hover:text-accent transition-colors">Portal do Cidadão</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-gray-300 text-sm">Bissau, Guiné-Bissau</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-gray-300 text-sm">+245 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-gray-300 text-sm">info@arn.gw</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Autoridade Reguladora Nacional. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
