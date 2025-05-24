
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    department: ""
  });

  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada com sucesso",
      description: "A sua mensagem foi recebida. Entraremos em contacto brevemente.",
    });
    setContactForm({ name: "", email: "", phone: "", subject: "", message: "", department: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Morada",
      content: ["Av. Amilcar Cabral, CP 1372", "Bissau, Guiné-Bissau"],
      color: "text-red-500"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: ["+245 XXX XXX XXX", "+245 XXX XXX XXX (Fax)"],
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@arn.gw", "presidente@arn.gw"],
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: ["Segunda a Sexta: 8h00 - 17h00", "Sábado: 8h00 - 12h00"],
      color: "text-purple-500"
    }
  ];

  const departments = [
    {
      name: "Gabinete do Presidente",
      description: "Assuntos estratégicos e institucionais",
      email: "presidente@arn.gw",
      phone: "+245 XXX XXX XXX"
    },
    {
      name: "Departamento de Regulamentação",
      description: "Questões regulamentares e normativas",
      email: "regulamentacao@arn.gw",
      phone: "+245 XXX XXX XXX"
    },
    {
      name: "Departamento de Fiscalização",
      description: "Fiscalização e compliance",
      email: "fiscalizacao@arn.gw",
      phone: "+245 XXX XXX XXX"
    },
    {
      name: "Departamento de Licenciamento",
      description: "Licenças e autorizações",
      email: "licenciamento@arn.gw",
      phone: "+245 XXX XXX XXX"
    },
    {
      name: "Atendimento ao Público",
      description: "Reclamações e informações gerais",
      email: "atendimento@arn.gw",
      phone: "+245 XXX XXX XXX"
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
              Contacto
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Entre em contacto connosco para esclarecimentos, informações 
              ou questões relacionadas com o setor das telecomunicações.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Como Contactar-nos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Várias formas de entrar em contacto com a ARN
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4`}>
                      <info.icon className={`h-8 w-8 ${info.color}`} />
                    </div>
                    <CardTitle className="text-primary">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.content.map((line, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-300 mb-1">
                        {line}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Envie-nos uma Mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário e entraremos em contacto brevemente
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Departamento</Label>
                        <Select onValueChange={(value) => setContactForm({ ...contactForm, department: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o departamento" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="geral">Informações Gerais</SelectItem>
                            <SelectItem value="presidente">Gabinete do Presidente</SelectItem>
                            <SelectItem value="regulamentacao">Regulamentação</SelectItem>
                            <SelectItem value="fiscalizacao">Fiscalização</SelectItem>
                            <SelectItem value="licenciamento">Licenciamento</SelectItem>
                            <SelectItem value="atendimento">Atendimento ao Público</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto *</Label>
                      <Input
                        id="subject"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        placeholder="Resumo do assunto"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Descreva a sua questão ou pedido de informação"
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Departments */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Departamentos</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Contacte diretamente o departamento adequado para uma resposta mais rápida
                  </p>
                </div>

                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <motion.div
                      key={dept.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-primary flex items-center">
                            <Building className="h-5 w-5 mr-2" />
                            {dept.name}
                          </CardTitle>
                          <CardDescription>{dept.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-gray-400" />
                              <span>{dept.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4 text-gray-400" />
                              <span>{dept.phone}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Localização
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Encontre-nos em Bissau
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden">
              <div className="h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-primary">Mapa Interativo</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Av. Amilcar Cabral, Bissau, Guiné-Bissau
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
