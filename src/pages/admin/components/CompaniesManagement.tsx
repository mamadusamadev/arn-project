
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, Plus, Search, FileText, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CompaniesManagement = () => {
  const { toast } = useToast();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const companies = [
    {
      id: 1,
      name: "Guiné Telecom",
      nif: "123456789",
      licenseType: "Móvel/Fixo",
      expirationDate: "2025-12-31",
      status: "Ativo",
      services: ["Voz", "Dados", "Internet"],
      documents: 5
    },
    {
      id: 2,
      name: "Orange Guiné-Bissau",
      nif: "987654321",
      licenseType: "Móvel",
      expirationDate: "2024-06-30",
      status: "Ativo",
      services: ["Voz", "Dados"],
      documents: 3
    },
    {
      id: 3,
      name: "MTN Bissau",
      nif: "555666777",
      licenseType: "Móvel",
      expirationDate: "2024-03-15",
      status: "Suspenso",
      services: ["Voz"],
      documents: 2
    }
  ];

  const licenseTypes = ["Móvel", "Fixo", "Móvel/Fixo", "Internet", "MVNO"];
  const serviceTypes = ["Voz", "Dados", "Internet", "SMS", "Roaming"];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.nif.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || company.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateCompany = () => {
    toast({
      title: "Operador adicionado",
      description: "O novo operador foi adicionado com sucesso.",
    });
    setShowCreateForm(false);
  };

  const handleDeleteCompany = (id: number) => {
    toast({
      title: "Operador eliminado",
      description: "O operador foi eliminado com sucesso.",
      variant: "destructive"
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "ativo": return "default";
      case "suspenso": return "destructive";
      case "expirado": return "secondary";
      default: return "outline";
    }
  };

  const isExpiringSoon = (date: string) => {
    const expDate = new Date(date);
    const now = new Date();
    const diffDays = Math.ceil((expDate.getTime() - now.getTime()) / (1000 * 3600 * 24));
    return diffDays <= 90 && diffDays > 0;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gestão de Operadores</h2>
          <p className="text-muted-foreground">Gerir licenças e informações dos operadores</p>
        </div>
        <Button onClick={() => setShowCreateForm(!showCreateForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Operador
        </Button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Novo Operador</CardTitle>
            <CardDescription>Adicionar um novo operador licenciado</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company-name">Nome da Empresa</Label>
                <Input id="company-name" placeholder="Nome do operador" />
              </div>
              <div>
                <Label htmlFor="company-nif">NIF</Label>
                <Input id="company-nif" placeholder="Número de identificação fiscal" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="license-type">Tipo de Licença</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {licenseTypes.map(type => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="expiration">Data de Expiração</Label>
                <Input id="expiration" type="date" />
              </div>
            </div>

            <div>
              <Label htmlFor="services">Serviços Autorizados</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {serviceTypes.map(service => (
                  <label key={service} className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex space-x-2">
              <Button onClick={handleCreateCompany}>Adicionar Operador</Button>
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
                  placeholder="Pesquisar por nome ou NIF..."
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
                <SelectItem value="ativo">Ativo</SelectItem>
                <SelectItem value="suspenso">Suspenso</SelectItem>
                <SelectItem value="expirado">Expirado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Companies Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Operadores ({filteredCompanies.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Operador</TableHead>
                <TableHead>Tipo de Licença</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Expiração</TableHead>
                <TableHead>Serviços</TableHead>
                <TableHead>Documentos</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCompanies.map((company) => (
                <TableRow key={company.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{company.name}</p>
                      <p className="text-sm text-muted-foreground">NIF: {company.nif}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{company.licenseType}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(company.status)}>
                      {company.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className={isExpiringSoon(company.expirationDate) ? "text-amber-600" : ""}>
                        {company.expirationDate}
                      </span>
                      {isExpiringSoon(company.expirationDate) && (
                        <Badge variant="secondary" className="text-xs">
                          Expira em breve
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {company.services.map(service => (
                        <Badge key={service} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>{company.documents}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDeleteCompany(company.id)}
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

export default CompaniesManagement;
