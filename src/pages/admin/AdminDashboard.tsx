
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  FileText, 
  Users, 
  MessageSquare, 
  Settings, 
  Home,
  LogOut,
  Building2,
  Newspaper,
  BookOpen,
  Scale,
  ChevronDown,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarInitials } from "@/components/ui/avatar";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarProvider,
  SidebarInset,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import DashboardOverview from "./components/DashboardOverview";
import ContentManagement from "./components/ContentManagement";
import NewsManagement from "./components/NewsManagement";
import CompaniesManagement from "./components/CompaniesManagement";
import RegulationsManagement from "./components/RegulationsManagement";
import MessagesManagement from "./components/MessagesManagement";
import SettingsManagement from "./components/SettingsManagement";
import UsersManagement from "./components/UsersManagement";
import StatisticsManagement from "./components/StatisticsManagement";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const sidebarItems = [
    { id: "dashboard", title: "Painel Principal", icon: Home },
    { id: "content", title: "Conteúdo", icon: FileText },
    { id: "news", title: "Notícias", icon: Newspaper },
    { id: "regulations", title: "Regulamentação", icon: Scale },
    { id: "companies", title: "Operadores", icon: Building2 },
    { id: "statistics", title: "Estatísticas", icon: BarChart3 },
    { id: "messages", title: "Mensagens", icon: MessageSquare },
    { id: "users", title: "Utilizadores", icon: Users },
    { id: "settings", title: "Configurações", icon: Settings },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardOverview />;
      case "content":
        return <ContentManagement />;
      case "news":
        return <NewsManagement />;
      case "regulations":
        return <RegulationsManagement />;
      case "companies":
        return <CompaniesManagement />;
      case "statistics":
        return <StatisticsManagement />;
      case "messages":
        return <MessagesManagement />;
      case "users":
        return <UsersManagement />;
      case "settings":
        return <SettingsManagement />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50 dark:bg-gray-900">
        <Sidebar className="border-r">
          <SidebarContent>
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold text-primary">ARN Admin</h2>
              <p className="text-sm text-muted-foreground">Painel Administrativo</p>
            </div>
            
            <SidebarGroup>
              <SidebarGroupLabel>Navegação Principal</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => setActiveSection(item.id)}
                        isActive={activeSection === item.id}
                        className="w-full justify-start"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">
          {/* Top Header */}
          <header className="bg-white dark:bg-gray-800 border-b h-16 flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold capitalize">
                {sidebarItems.find(item => item.id === activeSection)?.title || "Painel Principal"}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium">Admin</p>
                  <p className="text-muted-foreground text-xs">Administrador</p>
                </div>
              </div>
              
              <Link to="/">
                <Button variant="outline" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Site Principal
                </Button>
              </Link>
              
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
