
import { motion } from "framer-motion";
import { Building, Phone, Globe, MapPin, Search, Filter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Operators = () => {
  const operators = [
    {
      name: "Orange Guiné-Bissau",
      type: "Móvel",
      services: ["Voz", "SMS", "Internet Móvel", "4G"],
      license: "LIC-MOB-001",
      status: "Ativo",
      established: "2007",
      coverage: "Nacional",
      website: "https://orange.gw",
      phone: "+245 955 000 000",
      address: "Av. Domingos Ramos, Bissau"
    },
    {
      name: "MTN Guiné-Bissau",
      type: "Móvel",
      services: ["Voz", "SMS", "Internet Móvel", "4G"],
      license: "LIC-MOB-002",
      status: "Ativo",
      established: "2009",
      coverage: "Nacional",
      website: "https://mtn.gw",
      phone: "+245 966 000 000",
      address: "Bairro Militar, Bissau"
    },
    {
      name: "GuinéTel",
      type: "Fixo/Móvel",
      services: ["Telefone Fixo", "Internet Fixa", "Voz Móvel"],
      license: "LIC-FIX-001",
      status: "Ativo",
      established: "1989",
      coverage: "Nacional",
      website: "https://guinetel.gw",
      phone: "+245 320 1000",
      address: "Av. Amilcar Cabral, Bissau"
    },
    {
      name: "InternetGB",
      type: "Internet",
      services: ["Internet Fixa", "Banda Larga", "Wi-Fi"],
      license: "LIC-INT-001",
      status: "Ativo",
      established: "2015",
      coverage: "Regional",
      website: "https://internetgb.gw",
      phone: "+245 955 123 456",
      address: "Rua Guerra Mendes, Bissau"
    },
    {
      name: "Telecom Plus",
      type: "Móvel",
      services: ["Voz", "SMS", "Internet Móvel"],
      license: "LIC-MOB-003",
      status: "Suspenso",
      established: "2018",
      coverage: "Regional",
      website: "https://telecomplus.gw",
      phone: "+245 977 000 000",
      address: "Bairro da Penha, Bissau"
    },
    {
      name: "FibraNet",
      type: "Internet",
      services: ["Fibra Ótica", "Internet Empresarial"],
      license: "LIC-INT-002",
      status: "Ativo",
      established: "2020",
      coverage: "Urbano",
      website: "https://fibranet.gw",
      phone: "+245 955 987 654",
      address: "Av. Pansau Na Isna, Bissau"
    }
  ];

  const serviceTypes = ["Todos", "Móvel", "Fixo/Móvel", "Internet"];
  const statusTypes = ["Todos", "Ativo", "Suspenso"];

  const stats = [
    { title: "Operadores Licenciados", value: "12", icon: Building },
    { title: "Operadores Ativos", value: "10", icon: Phone },
    { title: "Cobertura Nacional", value: "85%", icon: Globe },
    { title: "Áreas Cobertas", value: "8", icon: MapPin },
  ];

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
              Operadores Licenciados
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Diretório completo das empresas autorizadas a prestar serviços de 
              telecomunicações na Guiné-Bissau.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{stat.title}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white dark:bg-gray-800">
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
                placeholder="Pesquisar operadores..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
          </motion.div>

          {/* Filter Badges */}
          <motion.div 
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex gap-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Tipo:</span>
              {serviceTypes.map((type) => (
                <Badge 
                  key={type}
                  variant={type === "Todos" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                >
                  {type}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Status:</span>
              {statusTypes.map((status) => (
                <Badge 
                  key={status}
                  variant={status === "Todos" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                >
                  {status}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operators Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-2">
              Lista de Operadores
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {operators.length} operadores registados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {operators.map((operator, index) => (
              <motion.div
                key={operator.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-primary mb-2">
                          {operator.name}
                        </CardTitle>
                        <div className="flex gap-2 mb-2">
                          <Badge variant="outline">{operator.type}</Badge>
                          <Badge 
                            variant={operator.status === "Ativo" ? "default" : "destructive"}
                          >
                            {operator.status}
                          </Badge>
                        </div>
                        <CardDescription>
                          Licença: {operator.license} • Desde {operator.established}
                        </CardDescription>
                      </div>
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Services */}
                      <div>
                        <h4 className="font-medium text-sm text-gray-600 dark:text-gray-300 mb-2">
                          Serviços Oferecidos:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {operator.services.map((service) => (
                            <Badge key={service} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Coverage */}
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Cobertura: {operator.coverage}</span>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{operator.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-gray-400" />
                          <a 
                            href={operator.website} 
                            className="text-sm text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {operator.website}
                            <ExternalLink className="inline h-3 w-3 ml-1" />
                          </a>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                          <span className="text-sm">{operator.address}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Informações sobre Licenciamento
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Empresas interessadas em operar no setor das telecomunicações devem 
              solicitar licença junto à ARN seguindo os procedimentos estabelecidos.
            </p>
            <Button size="lg" className="bg-accent text-primary hover:bg-accent/90">
              Consultar Procedimentos de Licenciamento
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Operators;
