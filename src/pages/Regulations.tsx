
import { motion } from "framer-motion";
import { Download, Search, Filter, FileText, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Regulations = () => {
  const regulations = [
    {
      title: "Regulamento Geral das Telecomunicações",
      description: "Framework regulatório principal para o setor das telecomunicações na Guiné-Bissau",
      date: "2023-12-15",
      category: "Regulamento",
      type: "PDF",
      size: "2.5 MB"
    },
    {
      title: "Normas de Qualidade de Serviço",
      description: "Especificações técnicas para garantia da qualidade dos serviços de telecomunicações",
      date: "2023-11-20",
      category: "Norma",
      type: "PDF",
      size: "1.8 MB"
    },
    {
      title: "Política de Numeração Nacional",
      description: "Diretrizes para gestão e atribuição de recursos de numeração",
      date: "2023-10-05",
      category: "Política",
      type: "PDF",
      size: "1.2 MB"
    },
    {
      title: "Regulamento de Proteção ao Consumidor",
      description: "Normas para proteção dos direitos dos utilizadores de serviços de telecomunicações",
      date: "2023-09-10",
      category: "Regulamento",
      type: "PDF",
      size: "2.1 MB"
    },
    {
      title: "Procedimentos de Licenciamento",
      description: "Guia completo para obtenção de licenças para operar no setor das telecomunicações",
      date: "2023-08-15",
      category: "Procedimento",
      type: "PDF",
      size: "3.2 MB"
    },
    {
      title: "Especificações Técnicas 5G",
      description: "Requisitos técnicos para implementação de redes de quinta geração",
      date: "2023-07-01",
      category: "Especificação",
      type: "PDF",
      size: "4.1 MB"
    }
  ];

  const categories = ["Todos", "Regulamento", "Norma", "Política", "Procedimento", "Especificação"];

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
              Regulamentação
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Acesso aos documentos normativos, regulamentos e políticas que regem 
              o setor das telecomunicações na Guiné-Bissau.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col md:flex-row gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Pesquisar documentos..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Data
              </Button>
            </div>
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
                variant={category === "Todos" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Regulations List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-2">
              Documentos Disponíveis
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {regulations.length} documentos encontrados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {regulations.map((regulation, index) => (
              <motion.div
                key={regulation.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <Badge variant="secondary">{regulation.category}</Badge>
                          <span className="text-sm text-gray-500">{regulation.date}</span>
                        </div>
                        <CardTitle className="text-primary mb-2">
                          {regulation.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {regulation.description}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="text-sm text-gray-500">
                          {regulation.type} • {regulation.size}
                        </div>
                        <Button size="sm" className="bg-primary hover:bg-primary-700">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Informações Importantes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Orientações sobre o uso dos documentos regulamentares
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Formato dos Documentos",
                description: "Todos os documentos estão disponíveis em formato PDF para facilitar o acesso e impressão."
              },
              {
                icon: Calendar,
                title: "Atualizações Regulares",
                description: "Os documentos são revisados e atualizados regularmente para refletir mudanças no setor."
              },
              {
                icon: Tag,
                title: "Categorização",
                description: "Documentos organizados por categoria para facilitar a localização de informações específicas."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Regulations;
