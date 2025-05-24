
import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Building, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Dr. António Silva",
      role: "Presidente da ARN",
      image: "/placeholder.svg",
      bio: "Especialista em telecomunicações com mais de 20 anos de experiência no setor."
    },
    {
      name: "Eng. Maria Santos",
      role: "Diretora de Regulamentação",
      image: "/placeholder.svg",
      bio: "Engenheira de telecomunicações com vasta experiência em políticas regulatórias."
    },
    {
      name: "Dr. João Pereira",
      role: "Diretor de Fiscalização",
      image: "/placeholder.svg",
      bio: "Especialista em compliance e fiscalização do setor das telecomunicações."
    }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Transparência",
      description: "Promovemos a transparência em todas as nossas ações e decisões regulatórias."
    },
    {
      icon: Users,
      title: "Participação",
      description: "Incentivamos a participação de todos os stakeholders nos processos regulatórios."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos a excelência técnica e profissional em todas as nossas atividades."
    },
    {
      icon: Building,
      title: "Integridade",
      description: "Atuamos com integridade, imparcialidade e responsabilidade social."
    }
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
              Sobre a Autoridade Reguladora Nacional
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Promovendo o desenvolvimento sustentável do setor das telecomunicações 
              e tecnologias de informação na Guiné-Bissau desde 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl text-primary">Nossa Missão</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Regular, supervisionar e promover o desenvolvimento do setor das telecomunicações 
                    e tecnologias de informação na Guiné-Bissau, garantindo serviços de qualidade, 
                    competição justa e proteção dos direitos dos consumidores, contribuindo para 
                    o desenvolvimento socioeconómico do país.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-l-4 border-l-accent">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Eye className="h-8 w-8 text-accent" />
                    <CardTitle className="text-2xl text-primary">Nossa Visão</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Ser reconhecida como uma autoridade reguladora moderna, eficiente e transparente, 
                    que promove a inovação tecnológica, a inclusão digital e o acesso universal 
                    às tecnologias de informação e comunicação, posicionando a Guiné-Bissau 
                    como referência regional no setor.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Os princípios que orientam nossa atuação regulatória
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Equipa de Liderança
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Profissionais experientes dedicados ao desenvolvimento do setor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-16 w-16 text-gray-400" />
                    </div>
                    <CardTitle className="text-primary">{member.name}</CardTitle>
                    <p className="text-accent font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossa História
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Mais de uma década dedicada ao desenvolvimento das telecomunicações na Guiné-Bissau
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2010",
                  title: "Criação da ARN",
                  description: "Estabelecimento da Autoridade Reguladora Nacional através de decreto presidencial."
                },
                {
                  year: "2015",
                  title: "Modernização Regulatória",
                  description: "Implementação de novos frameworks regulatórios alinhados com as melhores práticas internacionais."
                },
                {
                  year: "2020",
                  title: "Era Digital",
                  description: "Lançamento de iniciativas para promover a transformação digital do país."
                },
                {
                  year: "2024",
                  title: "Futuro Conectado",
                  description: "Preparação para a implementação de tecnologias 5G e Internet das Coisas (IoT)."
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-accent text-primary px-4 py-2 rounded-lg font-bold min-w-[80px] text-center">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-200">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
