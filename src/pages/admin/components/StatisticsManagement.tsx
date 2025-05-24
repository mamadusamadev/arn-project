
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Download, BarChart3, TrendingUp } from "lucide-react";

const StatisticsManagement = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gestão de Estatísticas</h2>
          <p className="text-muted-foreground">Upload e visualização de dados estatísticos</p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Dados
        </Button>
      </div>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle>Upload de Dados</CardTitle>
          <CardDescription>Carregar ficheiros CSV/JSON com dados estatísticos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">
              Funcionalidade em desenvolvimento
            </p>
            <Button>
              <Upload className="h-4 w-4 mr-2" />
              Selecionar Ficheiro
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Dados de Mercado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Estatísticas sobre penetração, receitas e utilizadores
            </p>
            <Button variant="outline" className="mt-4 w-full">
              <Download className="h-4 w-4 mr-2" />
              Exportar Relatório
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dados Trimestrais</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Relatórios trimestrais dos operadores
            </p>
            <Button variant="outline" className="mt-4 w-full">
              <Download className="h-4 w-4 mr-2" />
              Último Trimestre
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análise Anual</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Consolidação anual do sector
            </p>
            <Button variant="outline" className="mt-4 w-full">
              <Download className="h-4 w-4 mr-2" />
              Relatório 2023
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatisticsManagement;
