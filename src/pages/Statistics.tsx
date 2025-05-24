
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, Smartphone, Wifi, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Statistics = () => {
  // Sample data for charts
  const penetrationData = [
    { year: '2020', mobile: 78, internet: 32, fixed: 12 },
    { year: '2021', mobile: 82, internet: 38, fixed: 14 },
    { year: '2022', mobile: 85, internet: 42, fixed: 15 },
    { year: '2023', mobile: 89, internet: 48, fixed: 16 },
  ];

  const operatorMarketShare = [
    { name: 'Orange', value: 45, color: '#FF6B35' },
    { name: 'MTN', value: 35, color: '#F7931E' },
    { name: 'GuinéTel', value: 15, color: '#003366' },
    { name: 'Outros', value: 5, color: '#F4C430' },
  ];

  const monthlyTrafficData = [
    { month: 'Jan', voice: 2400, data: 1800, sms: 900 },
    { month: 'Fev', voice: 2300, data: 2100, sms: 850 },
    { month: 'Mar', voice: 2500, data: 2300, sms: 920 },
    { month: 'Abr', voice: 2200, data: 2500, sms: 880 },
    { month: 'Mai', voice: 2400, data: 2700, sms: 950 },
    { month: 'Jun', voice: 2300, data: 2900, sms: 900 },
  ];

  const keyMetrics = [
    { title: "Penetração Móvel", value: "89%", change: "+4%", trend: "up", icon: Smartphone },
    { title: "Penetração Internet", value: "48%", change: "+6%", trend: "up", icon: Wifi },
    { title: "Operadores Ativos", value: "12", change: "+2", trend: "up", icon: Users },
    { title: "Tráfego de Dados", value: "2.9GB", change: "+12%", trend: "up", icon: TrendingUp },
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
              Estatísticas do Setor
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Dados e análises sobre o desenvolvimento das telecomunicações 
              e tecnologias de informação na Guiné-Bissau.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Indicadores Principais
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Dados atualizados até dezembro de 2023
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <metric.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">{metric.value}</div>
                    <CardTitle className="text-lg">{metric.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center gap-2">
                      <TrendingUp className={`h-4 w-4 ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                      <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                        {metric.change}
                      </span>
                      <span className="text-sm text-gray-500">vs ano anterior</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Penetration Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Evolução da Penetração</CardTitle>
                <CardDescription>Percentagem de penetração por tipo de serviço</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={penetrationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="mobile" fill="#003366" name="Móvel" />
                      <Bar dataKey="internet" fill="#F4C430" name="Internet" />
                      <Bar dataKey="fixed" fill="#C1272D" name="Fixo" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Market Share Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Quota de Mercado Móvel</CardTitle>
                  <CardDescription>Distribuição por operador</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={operatorMarketShare}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {operatorMarketShare.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Traffic Chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Tráfego Mensal</CardTitle>
                  <CardDescription>Volume de tráfego por serviço (em milhões)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyTrafficData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="voice" stroke="#003366" name="Voz" />
                        <Line type="monotone" dataKey="data" stroke="#F4C430" name="Dados" />
                        <Line type="monotone" dataKey="sms" stroke="#C1272D" name="SMS" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Relatórios Estatísticos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Acesso aos relatórios detalhados do setor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Relatório Anual 2023",
                description: "Análise completa do desenvolvimento do setor durante o ano de 2023",
                date: "Janeiro 2024",
                size: "5.2 MB",
                type: "PDF"
              },
              {
                title: "Estatísticas Trimestrais Q4",
                description: "Dados estatísticos do quarto trimestre de 2023",
                date: "Dezembro 2023",
                size: "2.1 MB",
                type: "PDF"
              },
              {
                title: "Relatório de Qualidade",
                description: "Análise da qualidade dos serviços prestados pelos operadores",
                date: "Dezembro 2023",
                size: "3.8 MB",
                type: "PDF"
              }
            ].map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">Relatório</Badge>
                      <span className="text-sm text-gray-500">{report.type} • {report.size}</span>
                    </div>
                    <CardTitle className="text-primary">{report.title}</CardTitle>
                    <CardDescription>{report.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{report.date}</span>
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Metodologia e Fontes
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Os dados estatísticos são recolhidos trimestralmente junto dos operadores 
              licenciados e validados pela ARN seguindo metodologias internacionais.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: BarChart3,
                  title: "Dados Operacionais",
                  description: "Informações recolhidas diretamente dos operadores"
                },
                {
                  icon: Users,
                  title: "Estudos de Mercado",
                  description: "Pesquisas e análises realizadas por entidades especializadas"
                },
                {
                  icon: TrendingUp,
                  title: "Benchmarking Internacional",
                  description: "Comparação com dados regionais e internacionais"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;
