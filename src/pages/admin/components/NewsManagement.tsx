
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, Plus, Search, Eye, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsManagement = () => {
  const { toast } = useToast();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const newsItems = [
    {
      id: 1,
      title: "Nova regulamentação 5G aprovada",
      excerpt: "A ARN aprovou novas diretrizes para implementação da tecnologia 5G no país",
      category: "Regulamentação",
      status: "Publicado",
      author: "Admin",
      publishDate: "2024-01-15",
      views: 245
    },
    {
      id: 2,
      title: "Workshop sobre proteção do consumidor",
      excerpt: "Evento para operadores sobre direitos dos consumidores no sector das telecomunicações",
      category: "Eventos",
      status: "Rascunho",
      author: "Editor",
      publishDate: null,
      views: 0
    },
    {
      id: 3,
      title: "Relatório anual de estatísticas 2023",
      excerpt: "Dados consolidados do mercado de telecomunicações em 2023",
      category: "Relatórios",
      status: "Publicado",
      author: "Admin",
      publishDate: "2024-01-10",
      views: 189
    }
  ];

  const categories = ["Regulamentação", "Eventos", "Relatórios", "Comunicados", "Avisos"];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || item.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateNews = () => {
    toast({
      title: "Notícia criada",
      description: "A nova notícia foi criada com sucesso.",
    });
    setShowCreateForm(false);
  };

  const handlePublishNews = (id: number) => {
    toast({
      title: "Notícia publicada",
      description: "A notícia foi publicada com sucesso.",
    });
  };

  const handleDeleteNews = (id: number) => {
    toast({
      title: "Notícia eliminada",
      description: "A notícia foi eliminada com sucesso.",
      variant: "destructive"
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gestão de Notícias</h2>
          <p className="text-muted-foreground">Criar e gerir artigos e comunicados</p>
        </div>
        <Button onClick={() => setShowCreateForm(!showCreateForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Nova Notícia
        </Button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Nova Notícia</CardTitle>
            <CardDescription>Criar um novo artigo ou comunicado</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Título</Label>
                <Input id="title" placeholder="Título da notícia" />
              </div>
              <div>
                <Label htmlFor="category">Categoria</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecionar categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="excerpt">Resumo</Label>
              <Textarea id="excerpt" placeholder="Breve descrição da notícia" rows={3} />
            </div>
            
            <div>
              <Label htmlFor="content">Conteúdo</Label>
              <Textarea id="content" placeholder="Conteúdo completo da notícia" rows={8} />
            </div>

            <div>
              <Label htmlFor="image">Imagem</Label>
              <div className="flex items-center space-x-2">
                <Input id="image" type="file" accept="image/*" />
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload
                </Button>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button onClick={handleCreateNews}>Criar Notícia</Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Pesquisar notícias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os estados</SelectItem>
                <SelectItem value="publicado">Publicado</SelectItem>
                <SelectItem value="rascunho">Rascunho</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* News Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Notícias ({filteredNews.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Autor</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Visualizações</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredNews.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={item.status === "Publicado" ? "default" : "secondary"}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.author}</TableCell>
                  <TableCell>{item.publishDate || "Não publicado"}</TableCell>
                  <TableCell>{item.views}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      {item.status === "Rascunho" && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handlePublishNews(item.id)}
                        >
                          Publicar
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDeleteNews(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsManagement;
