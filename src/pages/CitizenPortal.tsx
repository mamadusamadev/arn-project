
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, HelpCircle, Shield, Phone, Mail, Send, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CitizenPortal = () => {
  const [complaintForm, setComplaintForm] = useState({
    name: "",
    email: "",
    phone: "",
    operator: "",
    subject: "",
    description: ""
  });

  const { toast } = useToast();

  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reclamação enviada com sucesso",
      description: "A sua reclamação foi registada e será analisada pela nossa equipa. Receberá uma resposta em até 5 dias úteis.",
    });
    setComplaintForm({ name: "", email: "", phone: "", operator: "", subject: "", description: "" });
  };

  const services = [
    {
      icon: MessageSquare,
      title: "Apresentar Reclamação",
      description: "Submeta reclamações sobre operadores de telecomunicações",
      color: "bg-red-500"
    },
    {
      icon: FileText,
      title: "Consultar Direitos",
      description: "Conheça os seus direitos como consumidor de telecomunicações",
      color: "bg-blue-500"
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Respostas às perguntas mais frequentes",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Proteção do Consumidor",
      description: "Informações sobre proteção e segurança",
      color: "bg-purple-500"
    }
  ];

  const faqs = [
    {
      question: "Como posso apresentar uma reclamação?",
      answer: "Pode apresentar a sua reclamação através do formulário online nesta página, por telefone através do número +245 XXX XXX XXX, ou presencialmente nas nossas instalações."
    },
    {
      question: "Quanto tempo demora a resolução de uma reclamação?",
      answer: "O prazo padrão para resolução de reclamações é de 15 dias úteis. Casos mais complexos podem requerer até 30 dias úteis."
    },
    {
      question: "Quais são os meus direitos como consumidor de telecomunicações?",
      answer: "Tem direito à qualidade do serviço, informação clara sobre tarifários, proteção de dados pessoais, e resolução de problemas de forma eficaz."
    },
    {
      question: "Como posso verificar se um operador está licenciado?",
      answer: "Pode consultar a lista de operadores licenciados na secção 'Operadores' do nosso website ou contactar-nos diretamente."
    },
    {
      question: "O que fazer em caso de cobrança indevida?",
      answer: "Contacte primeiro o seu operador para esclarecimento. Se não conseguir resolução, apresente uma reclamação junto da ARN com toda a documentação relevante."
    },
    {
      question: "Como posso alterar de operador mantendo o mesmo número?",
      answer: "A portabilidade numérica permite manter o seu número ao mudar de operador. Contacte o novo operador para iniciar o processo."
    }
  ];

  const consumerRights = [
    "Qualidade de serviço conforme contratado",
    "Informação clara e transparente sobre tarifários",
    "Proteção dos dados pessoais",
    "Resolução eficaz de reclamações",
    "Acesso a serviços de emergência",
    "Portabilidade numérica",
    "Faturação detalhada e compreensível",
    "Assistência técnica adequada"
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
              Portal do Cidadão
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Serviços online para reclamações, informações sobre direitos 
              e apoio aos consumidores de telecomunicações.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serviços Disponíveis
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Como podemos ajudá-lo hoje?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${service.color}`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complaint Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Apresentar Reclamação
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Utilize este formulário para apresentar a sua reclamação
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Formulário de Reclamação</CardTitle>
                <CardDescription>
                  Preencha todos os campos obrigatórios. A sua reclamação será analisada em até 15 dias úteis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleComplaintSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={complaintForm.name}
                        onChange={(e) => setComplaintForm({ ...complaintForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={complaintForm.email}
                        onChange={(e) => setComplaintForm({ ...complaintForm, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={complaintForm.phone}
                        onChange={(e) => setComplaintForm({ ...complaintForm, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="operator">Operador *</Label>
                      <Select onValueChange={(value) => setComplaintForm({ ...complaintForm, operator: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o operador" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="orange">Orange Guiné-Bissau</SelectItem>
                          <SelectItem value="mtn">MTN Guiné-Bissau</SelectItem>
                          <SelectItem value="guinetel">GuinéTel</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto da Reclamação *</Label>
                    <Input
                      id="subject"
                      value={complaintForm.subject}
                      onChange={(e) => setComplaintForm({ ...complaintForm, subject: e.target.value })}
                      placeholder="Descreva brevemente o problema"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição Detalhada *</Label>
                    <Textarea
                      id="description"
                      value={complaintForm.description}
                      onChange={(e) => setComplaintForm({ ...complaintForm, description: e.target.value })}
                      placeholder="Descreva detalhadamente a situação, incluindo datas, valores e outros dados relevantes"
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Reclamação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Consumer Rights */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Rights */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    Direitos do Consumidor
                  </CardTitle>
                  <CardDescription>
                    Conheça os seus direitos como utilizador de serviços de telecomunicações
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {consumerRights.map((right, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>{right}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Phone className="h-6 w-6 mr-2" />
                    Contacte-nos
                  </CardTitle>
                  <CardDescription>
                    Outras formas de apresentar reclamações ou obter informações
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Linha de Apoio ao Consumidor</p>
                        <p className="text-gray-600 dark:text-gray-300">+245 XXX XXX XXX</p>
                        <p className="text-sm text-gray-500">Segunda a Sexta: 8h00 - 17h00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email de Reclamações</p>
                        <p className="text-gray-600 dark:text-gray-300">reclamacoes@arn.gw</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <User className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Atendimento Presencial</p>
                        <p className="text-gray-600 dark:text-gray-300">Av. Amilcar Cabral, Bissau</p>
                        <p className="text-sm text-gray-500">Segunda a Sexta: 8h00 - 16h00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Respostas às dúvidas mais comuns
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CitizenPortal;
