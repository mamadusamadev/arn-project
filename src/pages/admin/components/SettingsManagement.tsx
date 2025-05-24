
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SettingsManagement = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    siteName: "ARN - Autoridade Reguladora Nacional",
    email: "info@arn.gw",
    phone: "+245 320 1234",
    address: "Bissau, Guiné-Bissau",
    darkModeDefault: false,
    maintenanceMode: false
  });

  const handleSaveSettings = () => {
    toast({
      title: "Configurações guardadas",
      description: "As configurações foram atualizadas com sucesso.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Configurações do Sistema</h2>
          <p className="text-muted-foreground">Gerir configurações gerais do site</p>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Configurações Gerais</TabsTrigger>
          <TabsTrigger value="appearance">Aparência</TabsTrigger>
          <TabsTrigger value="system">Sistema</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Instituição</CardTitle>
              <CardDescription>Dados básicos da ARN</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="site-name">Nome da Instituição</Label>
                <Input
                  id="site-name"
                  value={settings.siteName}
                  onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Principal</Label>
                  <Input
                    id="email"
                    type="email"
                    value={settings.email}
                    onChange={(e) => setSettings({...settings, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={settings.phone}
                    onChange={(e) => setSettings({...settings, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Endereço</Label>
                <Textarea
                  id="address"
                  value={settings.address}
                  onChange={(e) => setSettings({...settings, address: e.target.value})}
                  rows={3}
                />
              </div>

              <Button onClick={handleSaveSettings}>
                <Save className="h-4 w-4 mr-2" />
                Guardar Configurações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Aparência do Site</CardTitle>
              <CardDescription>Personalizar a aparência visual</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="logo">Logotipo</Label>
                <div className="flex items-center space-x-2">
                  <Input id="logo" type="file" accept="image/*" />
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="dark-mode">Modo Escuro por Defeito</Label>
                  <p className="text-sm text-muted-foreground">
                    Activar o modo escuro como padrão para novos visitantes
                  </p>
                </div>
                <Switch
                  id="dark-mode"
                  checked={settings.darkModeDefault}
                  onCheckedChange={(checked) => setSettings({...settings, darkModeDefault: checked})}
                />
              </div>

              <Button onClick={handleSaveSettings}>
                <Save className="h-4 w-4 mr-2" />
                Guardar Aparência
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Sistema</CardTitle>
              <CardDescription>Configurações técnicas e de manutenção</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="maintenance">Modo de Manutenção</Label>
                  <p className="text-sm text-muted-foreground">
                    Activar para mostrar página de manutenção aos visitantes
                  </p>
                </div>
                <Switch
                  id="maintenance"
                  checked={settings.maintenanceMode}
                  onCheckedChange={(checked) => setSettings({...settings, maintenanceMode: checked})}
                />
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">Backup e Exportação</h4>
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Save className="h-4 w-4 mr-2" />
                    Criar Backup
                  </Button>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Importar Dados
                  </Button>
                </div>
              </div>

              <Button onClick={handleSaveSettings}>
                <Save className="h-4 w-4 mr-2" />
                Guardar Sistema
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsManagement;
