"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Layers, Zap, Eye, Download, Share2 } from "lucide-react"

export default function RiskMaps() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-amber-400">Real-Time Risk Map</h1>
            <p className="text-slate-400 mt-1">Mapeamento dinâmico de riscos com dados em tempo real</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400/10">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400/10">
              <Share2 className="w-4 h-4 mr-2" />
              Compartilhar
            </Button>
          </div>
        </div>

        {/* Main Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Map */}
          <Card className="lg:col-span-3 bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-amber-400">Mapa de Risco Interativo</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                    Ao Vivo
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-slate-700 rounded-lg overflow-hidden">
                {/* Simulated Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-yellow-900/40 to-red-900/40">
                  {/* Risk Zones */}
                  <div className="absolute top-8 left-8 w-16 h-16 bg-red-500/60 rounded-full animate-pulse"></div>
                  <div className="absolute top-20 right-16 w-12 h-12 bg-yellow-500/60 rounded-full"></div>
                  <div className="absolute bottom-16 left-16 w-20 h-20 bg-red-500/60 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 right-8 w-14 h-14 bg-yellow-500/60 rounded-full"></div>

                  {/* Legend */}
                  <div className="absolute top-4 left-4 bg-slate-800/90 p-3 rounded-lg">
                    <h4 className="text-sm font-medium text-white mb-2">Legenda</h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-slate-300">Baixo Risco</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span className="text-xs text-slate-300">Médio Risco</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <span className="text-xs text-slate-300">Alto Risco</span>
                      </div>
                    </div>
                  </div>

                  {/* Location Markers */}
                  <div className="absolute top-12 left-20">
                    <div className="bg-slate-800/90 p-2 rounded text-xs text-white">
                      <p className="font-medium">Petrópolis - RJ</p>
                      <p className="text-red-400">Risco Alto</p>
                    </div>
                  </div>

                  <div className="absolute bottom-20 right-20">
                    <div className="bg-slate-800/90 p-2 rounded text-xs text-white">
                      <p className="font-medium">Nova Friburgo - RJ</p>
                      <p className="text-yellow-400">Risco Médio</p>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                  <Button size="sm" variant="outline" className="bg-slate-800/90 border-slate-600">
                    <Zap className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-slate-800/90 border-slate-600">
                    <Layers className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-slate-800/90 border-slate-600">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Insights & Alerts */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-amber-400">Insights & Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-3">Current Alerts</h4>
                <div className="space-y-2">
                  <div className="p-2 bg-yellow-900/20 border border-yellow-600/30 rounded">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm text-yellow-400">Flood</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">Petrópolis Centro</p>
                  </div>
                  <div className="p-2 bg-red-900/20 border border-red-600/30 rounded">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-sm text-red-400">Landslide</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">Cascatinha</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-3">Key Insights</h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>• Precipitação acima da média nas últimas 6h</p>
                  <p>• Solo saturado em 3 regiões críticas</p>
                  <p>• 127 relatos da comunidade confirmados</p>
                  <p>• Nível dos rios 15% acima do normal</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-3">Ações Recomendadas</h4>
                <div className="space-y-2">
                  <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700">
                    Ativar Protocolo de Evacuação
                  </Button>
                  <Button size="sm" variant="outline" className="w-full border-amber-400 text-amber-400">
                    Enviar Alerta à População
                  </Button>
                  <Button size="sm" variant="outline" className="w-full border-slate-600">
                    Mobilizar Equipes de Campo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-400">
                <MapPin className="w-5 h-5" />
                <span>Mapeamento Dinâmico</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-sm mb-4">
                Utiliza dados em tempo real de sensores IoT, satélites e relatos da comunidade para atualizar
                continuamente os mapas de risco.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Sensores Ativos</span>
                  <span className="text-amber-400">1.247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Última Atualização</span>
                  <span className="text-amber-400">2 min atrás</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-400">
                <Layers className="w-5 h-5" />
                <span>Camadas de Dados</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-sm mb-4">
                Integra múltiplas camadas de informação: topografia, hidrografia, densidade populacional e
                infraestrutura urbana.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-slate-300">Hidrografia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-slate-300">Topografia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-slate-300">Demografia</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-400">
                <Zap className="w-5 h-5" />
                <span>Alertas Inteligentes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-sm mb-4">
                Sistema de alertas baseado em IA que considera múltiplos fatores para determinar o nível de risco e
                acionar notificações automáticas.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Precisão do Modelo</span>
                  <span className="text-amber-400">94.2%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Tempo de Resposta</span>
                  <span className="text-amber-400">{"< 30s"}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
