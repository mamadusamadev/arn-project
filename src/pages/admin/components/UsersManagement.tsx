
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, Plus, Search, Key, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UsersManagement = () => {
  const { toast } = useToast();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const users = [
    {
      id: 1,
      name: "Admin Principal",
      email: "admin@arn.gw",
      role: "Admin",
      status: "Ativo",
      lastLogin: "2024-01-15",
      createdAt: "2023-01-01"
    },
    {
      id: 2,
      name: "Editor Conteúdo",
      email: "editor@arn.gw",
      role: "Editor",
      status: "Ativo",
      lastLogin: "2024-01-14",
      createdAt: "2023-06-15"
    },
    {
      id: 3,
      name: "Analista Dados",
      email: "analista@arn.gw",
      role: "Analista",
      status: "Inativo",
      lastLogin: "2023-12-20",
      createdAt: "2023-08-10"
    }
  ];

  const roles = ["Admin", "Editor", "Analista"];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role.toLowerCase() === roleFilter;
    return matchesSearch && matchesRole;
  });

  const handleCreateUser = () => {
    toast({
      title: "Utilizador criado",
      description: "O novo utilizador foi criado com sucesso.",
    });
    setShowCreateForm(false);
  };

  const handleDeleteUser = (id: number) => {
    toast({
      title: "Utilizador eliminado",
      description: "O utilizador foi eliminado com sucesso.",
      variant: "destructive"
    });
  };

  const handleResetPassword = (id: number) => {
    toast({
      title: "Password redefinida",
      description: "A password foi redefinida e enviada por email.",
    });
  };

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "admin": return "default";
      case "editor": return "secondary";
      case "analista": return "outline";
      default: return "outline";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "Ativo" ? "default" : "secondary";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gestão de Utilizadores</h2>
          <p className="text-muted-foreground">Gerir contas e permissões de utilizadores</p>
        </div>
        <Button onClick={() => setShowCreateForm(!showCreateForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Novo Utilizador
        </Button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Novo Utilizador</CardTitle>
            <CardDescription>Criar uma nova conta de utilizador</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="user-name">Nome Completo</Label>
                <Input id="user-name" placeholder="Nome do utilizador" />
              </div>
              <div>
                <Label htmlFor="user-email">Email</Label>
                <Input id="user-email" type="email" placeholder="email@arn.gw" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="user-role">Função</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecionar função" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map(role => (
                      <SelectItem key={role} value={role.toLowerCase()}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="user-password">Password Temporária</Label>
                <Input id="user-password" type="password" placeholder="Password inicial" />
              </div>
            </div>

            <div className="flex space-x-2">
              <Button onClick={handleCreateUser}>Criar Utilizador</Button>
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
                  placeholder="Pesquisar utilizadores..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filtrar por função" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as funções</SelectItem>
                {roles.map(role => (
                  <SelectItem key={role} value={role.toLowerCase()}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Utilizadores ({filteredUsers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Utilizador</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Último Acesso</TableHead>
                <TableHead>Data de Criação</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getRoleColor(user.role)}>
                      <Shield className="h-3 w-3 mr-1" />
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(user.status)}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell>{user.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleResetPassword(user.id)}
                      >
                        <Key className="h-4 w-4" />
                      </Button>
                      {user.role !== "Admin" && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Permissions Info */}
      <Card>
        <CardHeader>
          <CardTitle>Permissões por Função</CardTitle>
          <CardDescription>Descrição dos níveis de acesso</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-primary">Admin</h4>
              <p className="text-sm text-muted-foreground">
                Acesso completo a todas as funcionalidades, incluindo gestão de utilizadores.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-secondary">Editor</h4>
              <p className="text-sm text-muted-foreground">
                Pode criar e editar conteúdo, notícias e documentos regulamentares.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">Analista</h4>
              <p className="text-sm text-muted-foreground">
                Acesso a estatísticas e relatórios, sem permissões de edição.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersManagement;
