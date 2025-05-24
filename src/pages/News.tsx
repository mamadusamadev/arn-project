
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const News = () => {
  const featuredNews = {
    title: "ARN Aprova Framework Regulatório para 5G",
    summary: "A Autoridade Reguladora Nacional aprovou hoje o novo framework regulatório que permitirá a implementação da tecnologia 5G na Guiné-Bissau, marcando um passo importante para a modernização das telecomunicações no país.",
    date: "2024-01-15",
    author: "Gabinete de Comunicação ARN",
    category: "Regulamentação",
    readTime: "5 min"
  };

  const news = [
    {
      title: "Relatório Anual de Estatísticas do Setor 2023",
      summary: "Publicação do relatório estatístico anual com dados de penetração, qualidade e desenvolvimento dos serviços de telecomunicações.",
      date: "2024-01-10",
      author: "Departamento de Estatísticas",
      category: "Relatórios",
      readTime: "8 min"
    },
    {
      title: "Workshop sobre Proteção do Consumidor Realizado com Sucesso",
      summary: "ARN organizou workshop para operadores sobre implementação de medidas de proteção aos direitos dos consumidores.",
      date: "2024-01-05",
      author: "Departamento de Proteção ao Consumidor",
      category: "Eventos",
      readTime: "3 min"
    },
    {
      title: "Nova Licença Atribuída para Serviços de Internet Móvel",
      summary: "ARN atribui nova licença para prestação de serviços de internet móvel, aumentando a competição no mercado.",
      date: "2023-12-28",
      author: "Departamento de Licenciamento",
      category: "Licenciamento",
      readTime: "4 min"
    },
    {
      title: "Campanha de Sensibilização sobre Uso Responsável das TIC",
      summary: "Lançamento de campanha nacional para promover o uso responsável e seguro das tecnologias de informação e comunicação.",
      date: "2023-12-20",
      author: "Gabinete de Comunicação",
      category: "Campanhas",
      readTime: "6 min"
    },
    {
      title: "Reunião de Coordenação com Operadores de Telecomunicações",
      summary: "ARN realizou reunião de coordenação com todos os operadores para discussão de questões técnicas e regulamentares.",
      date: "2023-12-15",
      author: "Direção Executiva",
      category: "Reuniões",
      readTime: "4 min"
    },
    {
      title: "Implementação de Novas Medidas de Cibersegurança",
      summary: "ARN anuncia implementação de novas medidas para reforçar a cibersegurança no setor das telecomunicações.",
      date: "2023-12-10",
      author: "Departamento Técnico",
      category: "Segurança",
      readTime: "7 min"
    }
  ];

  const categories = ["Todas", "Regulamentação", "Relatórios", "Eventos", "Licenciamento", "Campanhas", "Reuniões", "Segurança"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notícias e Comunicados
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Mantenha-se informado sobre as últimas novidades, decisões regulamentares 
              e desenvolvimentos no setor das telecomunicações.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex-1">
              <Input placeholder="Pesquisar notícias..." />
            </div>
            <Button variant="outline">
              Pesquisar
            </Button>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === "Todas" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-l-4 border-l-accent mb-12">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-accent text-primary">Destaque</Badge>
                  <Badge variant="outline">{featuredNews.category}</Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl text-primary mb-4">
                  {featuredNews.title}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredNews.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredNews.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    {featuredNews.readTime} de leitura
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg mb-6">
                  {featuredNews.summary}
                </CardDescription>
                <Button>
                  Ler Notícia Completa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Todas as Notícias
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {news.length} notícias encontradas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-primary hover:text-primary/80 transition-colors">
                      {article.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {article.summary}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.author}</span>
                      <Button variant="outline" size="sm">
                        Ler Mais
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="outline" size="lg">
              Carregar Mais Notícias
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
