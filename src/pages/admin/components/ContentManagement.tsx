
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Edit, Save, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContentManagement = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState<string | null>(null);

  const contentSections = [
    {
      id: "about",
      title: "Sobre a ARN",
      content: "A Autoridade Reguladora Nacional (ARN) é a entidade responsável pela regulação e supervisão do sector das comunicações electrónicas na Guiné-Bissau.",
      lastUpdate: "2024-01-15"
    },
    {
      id: "mission",
      title: "Missão",
      content: "Regular, supervisionar e promover o desenvolvimento sustentável do sector das telecomunicações e tecnologias de informação e comunicação.",
      lastUpdate: "2024-01-10"
    },
    {
      id: "vision",
      title: "Visão",
      content: "Ser uma autoridade reguladora moderna, eficiente e transparente, que contribua para o desenvolvimento digital da Guiné-Bissau.",
      lastUpdate: "2024-01-08"
    }
  ];

  const boardMembers = [
    {
      id: 1,
      name: "Dr. João Silva",
      position: "Presidente do Conselho de Administração",
      bio: "Licenciado em Engenharia de Telecomunicações, com mais de 15 anos de experiência no sector.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Eng.ª Maria Santos",
      position: "Diretora Técnica",
      bio: "Especialista em regulamentação de telecomunicações e políticas públicas digitais.",
      image: "/placeholder.svg"
    }
  ];

  const [editingContent, setEditingContent] = useState<any>(null);
  const [editingMember, setEditingMember] = useState<any>(null);

  const handleSaveContent = () => {
    toast({
      title: "Conteúdo atualizado",
      description: "As alterações foram guardadas com sucesso.",
    });
    setIsEditing(null);
    setEditingContent(null);
  };

  const handleSaveMember = () => {
    toast({
      title: "Membro atualizado",
      description: "As informações do membro foram guardadas com sucesso.",
    });
    setEditingMember(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gestão de Conteúdo</h2>
          <p className="text-muted-foreground">Gerir páginas institucionais e informações</p>
        </div>
      </div>

      <Tabs defaultValue="institutional" className="space-y-4">
        <TabsList>
          <TabsTrigger value="institutional">Páginas Institucionais</TabsTrigger>
          <TabsTrigger value="board">Conselho de Administração</TabsTrigger>
          <TabsTrigger value="structure">Estrutura Organizacional</TabsTrigger>
        </TabsList>

        <TabsContent value="institutional" className="space-y-4">
          {contentSections.map((section) => (
            <Card key={section.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription>
                      Última atualização: {section.lastUpdate}
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsEditing(section.id);
                      setEditingContent(section);
                    }}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Editar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {isEditing === section.id ? (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Título</Label>
                      <Input
                        id="title"
                        defaultValue={section.title}
                        onChange={(e) => setEditingContent({...editingContent, title: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="content">Conteúdo</Label>
                      <Textarea
                        id="content"
                        defaultValue={section.content}
                        rows={6}
                        onChange={(e) => setEditingContent({...editingContent, content: e.target.value})}
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={handleSaveContent}>
                        <Save className="h-4 w-4 mr-2" />
                        Guardar
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditing(null)}>
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm">{section.content}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="board" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Membros do Conselho</h3>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Membro
            </Button>
          </div>

          {boardMembers.map((member) => (
            <Card key={member.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.position}</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingMember(member)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {editingMember?.id === member.id ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome</Label>
                        <Input id="name" defaultValue={member.name} />
                      </div>
                      <div>
                        <Label htmlFor="position">Cargo</Label>
                        <Input id="position" defaultValue={member.position} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="bio">Biografia</Label>
                      <Textarea id="bio" defaultValue={member.bio} rows={3} />
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={handleSaveMember}>
                        <Save className="h-4 w-4 mr-2" />
                        Guardar
                      </Button>
                      <Button variant="outline" onClick={() => setEditingMember(null)}>
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm">{member.bio}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="structure">
          <Card>
            <CardHeader>
              <CardTitle>Estrutura Organizacional</CardTitle>
              <CardDescription>Organigramas e departamentos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  Funcionalidade em desenvolvimento
                </p>
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Organigrama
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentManagement;
