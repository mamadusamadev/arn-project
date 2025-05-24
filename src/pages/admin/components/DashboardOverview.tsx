
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MessageSquare, FileText, Users, TrendingUp, Calendar } from "lucide-react";

const DashboardOverview = () => {
  const stats = [
    { 
      title: "Operadores Licenciados", 
      value: "12", 
      change: "+2 este ano", 
      icon: Building2,
      trend: "up"
    },
    { 
      title: "Reclamações este Mês", 
      value: "8", 
      change: "-3 vs mês anterior", 
      icon: MessageSquare,
      trend: "down"
    },
    { 
      title: "Documentos Publicados", 
      value: "25", 
      change: "+5 este mês", 
      icon: FileText,
      trend: "up"
    },
    { 
      title: "Utilizadores Ativos", 
      value: "3", 
      change: "Sistema", 
      icon: Users,
      trend: "neutral"
    },
  ];

  const recentActivities = [
    { 
      type: "news", 
      title: "Nova regulamentação 5G aprovada", 
      date: "2024-01-15", 
      status: "Publicado" 
    },
    { 
      type: "company", 
      title: "Renovação de licença - Operadora A", 
      date: "2024-01-14", 
      status: "Pendente" 
    },
    { 
      type: "complaint", 
      title: "Reclamação sobre qualidade de sinal", 
      date: "2024-01-13", 
      status: "Em análise" 
    },
    { 
      type: "regulation", 
      title: "Decisão ARN/2024/001", 
      date: "2024-01-12", 
      status: "Publicado" 
    },
  ];

  const monthlyData = [
    { month: "Jan", complaints: 12, documents: 5, companies: 12 },
    { month: "Fev", complaints: 8, documents: 3, companies: 12 },
    { month: "Mar", complaints: 15, documents: 7, companies: 12 },
    { month: "Abr", complaints: 10, documents: 4, companies: 12 },
    { month: "Mai", complaints: 6, documents: 8, companies: 12 },
    { month: "Jun", complaints: 8, documents: 6, companies: 12 },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs flex items-center ${
                stat.trend === 'up' ? 'text-green-600' : 
                stat.trend === 'down' ? 'text-red-600' : 'text-muted-foreground'
              }`}>
                {stat.trend === 'up' && <TrendingUp className="h-3 w-3 mr-1" />}
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>Últimas ações no sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.title}</p>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {activity.date}
                    </p>
                  </div>
                  <Badge variant={
                    activity.status === "Publicado" ? "default" : 
                    activity.status === "Pendente" ? "secondary" : "outline"
                  }>
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Estatísticas Mensais</CardTitle>
            <CardDescription>Resumo dos últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.slice(-3).map((data, index) => (
                <div key={data.month} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{data.month}</span>
                  <div className="flex space-x-4 text-sm">
                    <span className="text-blue-600">{data.complaints} reclamações</span>
                    <span className="text-green-600">{data.documents} docs</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
          <CardDescription>Funcionalidades mais utilizadas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <FileText className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Nova Notícia</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <Building2 className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Adicionar Operador</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <MessageSquare className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Ver Mensagens</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Gerir Utilizadores</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
