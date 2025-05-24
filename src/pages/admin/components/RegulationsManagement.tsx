
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, Plus, Search, Download, Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RegulationsManagement = () => {
  const { toast } = useToast();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const regulations = [
    {
      id: 1,
      title: "Regulamento Geral de Interconexão",
      description: "Regras para interconexão entre operadores de telecomunicações",
      category: "Regulamento",
      year: "2024",
      reference: "ARN/REG/001/2024",
      publishDate: "2024-01-15",
      fileSize: "2.3 MB",
      downloads: 156
    },
    {
      id: 2,
      title: "Decisão sobre Tarifas Móveis",
      description: "Decisão regulatória sobre estrutura tarifária para serviços móveis",
      category: "Decisão",
      year: "2023",
      reference: "ARN/DEC/012/2023",
      publishDate: "2023-12-20",
      fileSize: "1.8 MB",
      downloads: 89
    },
    {
      id: 3,
      title: "Lei das Comunicações Electrónicas",
      description: "Lei base do sector das comunicações electrónicas",
      category: "Lei",
      year: "2023",
      reference: "LEI/005/2023",
      publishDate: "2023-08-10",
      fileSize: "4.1 MB",
      downloads: 324
    }
  ];

  const categories = ["Lei", "Regulamento", "Decisão", "Directriz", "Consulta Pública"];

  const filteredRegulations = regulations.filter(regulation => {
    const matchesSearch = regulation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         regulation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         regulation.reference.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || regulation.category.toLowerCase() === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleCreateRegulation = () => {
    toast({
      title: "Documento adicionado",
      description: "O novo documento foi adicionado com sucesso.",
    });
    setShowCreateForm(false);
  };

  const handleDeleteRegulation = (id: number) => {
    toast({
      title: "Documento eliminado",
      description: "O documento foi eliminado com sucesso.",
      variant: "destructive"
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "lei": return "default";
      case "regulamento": return "secondary";
      case "decisão": return "outline";
      case "directriz": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gestão de Regulamentação</h2>
          <p className="text-muted-foreground">Gerir leis, regulamentos e decisões</p>
        </div>
        <Button onClick={() => setShowCreateForm(!showCreateForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Documento
        </Button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Novo Documento</CardTitle>
            <CardDescription>Adicionar um novo documento legal ou regulamentar</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="doc-title">Título</Label>
                <Input id="doc-title" placeholder="Título do documento" />
              </div>
              <div>
                <Label htmlFor="doc-reference">Referência</Label>
                <Input id="doc-reference" placeholder="Ex: ARN/REG/001/2024" />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="doc-category">Categoria</Label>
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
              <div>
                <Label htmlFor="doc-year">Ano</Label>
                <Input id="doc-year" type="number" placeholder="2024" />
              </div>
              <div>
                <Label htmlFor="doc-date">Data de Publicação</Label>
                <Input id="doc-date" type="date" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="doc-description">Descrição</Label>
              <Textarea id="doc-description" placeholder="Breve descrição do documento" rows={3} />
            </div>

            <div>
              <Label htmlFor="doc-file">Arquivo PDF</Label>
              <div className="flex items-center space-x-2">
                <Input id="doc-file" type="file" accept=".pdf" />
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload
                </Button>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button onClick={handleCreateRegulation}>Adicionar Documento</Button>
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
                  placeholder="Pesquisar documentos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filtrar por categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as categorias</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Regulations Table */}
      <Card>
        <CardHeader>
          <CardTitle>Documentos Legais ({filteredRegulations.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Documento</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Referência</TableHead>
                <TableHead>Ano</TableHead>
                <TableHead>Data Publicação</TableHead>
                <TableHead>Tamanho</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRegulations.map((regulation) => (
                <TableRow key={regulation.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{regulation.title}</p>
                      <p className="text-sm text-muted-foreground">{regulation.description}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getCategoryColor(regulation.category)}>
                      {regulation.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {regulation.reference}
                    </code>
                  </TableCell>
                  <TableCell>{regulation.year}</TableCell>
                  <TableCell>{regulation.publishDate}</TableCell>
                  <TableCell>{regulation.fileSize}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span>{regulation.downloads}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDeleteRegulation(regulation.id)}
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

export default RegulationsManagement;
