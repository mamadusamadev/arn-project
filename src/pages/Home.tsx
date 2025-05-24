
import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Users, FileText, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const news = [
    {
      title: "Nova Regulamentação para Serviços 5G",
      summary: "ARN aprova framework regulatório para implementação da tecnologia 5G na Guiné-Bissau.",
      date: "2024-01-15",
      category: "Regulamentação"
    },
    {
      title: "Relatório Anual de Estatísticas do Setor",
      summary: "Publicação do relatório estatístico anual com dados de penetração e qualidade dos serviços.",
      date: "2024-01-10",
      category: "Estatísticas"
    },
    {
      title: "Workshop sobre Proteção do Consumidor",
      summary: "ARN realiza workshop sobre direitos dos consumidores de telecomunicações.",
      date: "2024-01-05",
      category: "Eventos"
    }
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Regulamentação",
      description: "Frameworks regulatórios modernos para promover a inovação e proteger os consumidores",
      link: "/regulamentacao"
    },
    {
      icon: TrendingUp,
      title: "Estatísticas do Mercado",
      description: "Dados atualizados sobre o desenvolvimento do setor das telecomunicações",
      link: "/estatisticas"
    },
    {
      icon: Users,
      title: "Portal do Cidadão",
      description: "Serviços online para reclamações, informações e direitos dos consumidores",
      link: "/portal-cidadao"
    },
    {
      icon: Globe,
      title: "Operadores Licenciados",
      description: "Diretório completo das empresas autorizadas a operar no mercado nacional",
      link: "/operadores"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="hero-gradient py-20 lg:py-32 text-white relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-shadow"
              variants={cardVariants}
            >
              Regulando o Futuro das
              <span className="text-accent block">Telecomunicações</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
              variants={cardVariants}
            >
              A Autoridade Reguladora Nacional promove o desenvolvimento sustentável 
              do setor das TIC na Guiné-Bissau, garantindo serviços de qualidade para todos.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={cardVariants}
            >
              <Link to="/sobre">
                <Button size="lg" className="bg-accent text-primary hover:bg-accent/90">
                  Conhecer a ARN
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portal-cidadao">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  Portal do Cidadão
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-20 left-10 text-accent/30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Zap className="h-16 w-16" />
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-10 text-accent/30"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          <Globe className="h-20 w-20" />
        </motion.div>
      </motion.section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Principais Áreas de Atuação
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Promovemos a inovação, competição e proteção dos direitos dos consumidores
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={item.link}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent">
                    <CardHeader>
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-primary">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex justify-between items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Últimas Notícias
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Mantenha-se informado sobre as novidades do setor
              </p>
            </div>
            <Link to="/noticias">
              <Button variant="outline" className="hidden sm:flex">
                Ver Todas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <CardTitle className="text-primary hover:text-primary/80 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {item.summary}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link to="/noticias">
              <Button variant="outline">
                Ver Todas as Notícias
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Setor em Números
            </h2>
            <p className="text-xl text-gray-200">
              Estatísticas que demonstram o crescimento das telecomunicações
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "12+", label: "Operadores Licenciados" },
              { value: "85%", label: "Penetração Móvel" },
              { value: "45%", label: "Cobertura Internet" },
              { value: "24/7", label: "Suporte ao Cidadão" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
