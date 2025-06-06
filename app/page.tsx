"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Droplets, Mountain, Users, TrendingUp } from "lucide-react"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const temperatureData = [
  { time: "00:00", temp: 22 },
  { time: "04:00", temp: 20 },
  { time: "08:00", temp: 24 },
  { time: "12:00", temp: 28 },
  { time: "16:00", temp: 26 },
  { time: "20:00", temp: 23 },
]

const riskData = [
  { time: "00:00", risk: 30 },
  { time: "04:00", risk: 25 },
  { time: "08:00", risk: 45 },
  { time: "12:00", risk: 65 },
  { time: "16:00", risk: 80 },
  { time: "20:00", risk: 55 },
]

const alertsData = [
  { name: "Enchentes", value: 716, color: "#f59e0b" },
  { name: "Deslizamentos", value: 445, color: "#ef4444" },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-amber-400">Disaster Risk Management</h1>
            <p className="text-slate-400 mt-1">Dona Maria, Carlos Almeida, Ana Pereira</p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="border-amber-400 text-amber-400">
              AtartaOnArib
            </Badge>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Temperatura</CardTitle>
              <TrendingUp className="h-4 w-4 text-amber-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">24°C</div>
              <p className="text-xs text-slate-400">+2°C desde ontem</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Real-Time</CardTitle>
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">Ativo</div>
              <p className="text-xs text-slate-400">Monitoramento contínuo</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Alertas 2023</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">3.425</div>
              <p className="text-xs text-slate-400">1.813 hidrológicos, 1.612 geológicos</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Pessoas Afetadas</CardTitle>
              <Users className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">608.913</div>
              <p className="text-xs text-slate-400">Desabrigadas e desalojadas em 2023</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Real-Time Risk Map */}
          <Card className="lg:col-span-2 bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-amber-400">Real-Time Risk Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 bg-slate-700 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-yellow-900/30 to-red-900/30">
                  <div className="absolute top-4 left-4 space-y-2">
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
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-slate-800/80 p-2 rounded">
                      <p className="text-xs text-slate-300">Região Sudeste</p>
                      <p className="text-sm font-semibold text-amber-400">Risco Elevado</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Overview */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-amber-400">Risk Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-yellow-900/20 rounded-lg border border-yellow-600/30">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-sm font-medium text-yellow-400">WARNING</p>
                  <p className="text-xs text-slate-300">Chuva intensa prevista</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-blue-900/20 rounded-lg border border-blue-600/30">
                <Droplets className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-blue-400">Flood</p>
                  <p className="text-xs text-slate-300">Risco de enchente</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-red-900/20 rounded-lg border border-red-600/30">
                <Mountain className="h-5 w-5 text-red-400" />
                <div>
                  <p className="text-sm font-medium text-red-400">Landslide</p>
                  <p className="text-xs text-slate-300">Risco de deslizamento</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Temperature Chart */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-amber-400">Temperatura (24h)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                    }}
                  />
                  <Line type="monotone" dataKey="temp" stroke="#f59e0b" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Risk Level Chart */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-amber-400">Nível de Risco (%)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={riskData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                    }}
                  />
                  <Area type="monotone" dataKey="risk" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Project Overview */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-amber-400">Visão Geral do Projeto</CardTitle>
            <CardDescription className="text-slate-400">
              Sistema integrado de prevenção e gestão de riscos de desastres naturais
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Problema Identificado</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  O Brasil enfrentou em 2023 o maior número de desastres naturais já registrado, com 1.161 ocorrências,
                  resultando em 132 mortes e prejuízos de R$ 15,64 bilhões. A falta de sistemas integrados de prevenção
                  e alerta compromete a resposta eficaz.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Nossa Solução</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Plataforma integrada com módulos de mapeamento dinâmico de riscos, alertas inteligentes e engajamento
                  comunitário, utilizando Machine Learning e dados em tempo real para prevenção e resposta a desastres.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Módulos Principais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-medium text-amber-400 mb-2">Prevenção e Mapeamento Dinâmico</h4>
                  <p className="text-sm text-slate-300">
                    Utiliza ML para análise de dados históricos, geográficos e climáticos, gerando mapas de
                    suscetibilidade e previsões de risco.
                  </p>
                </div>
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-medium text-amber-400 mb-2">Engajamento Comunitário</h4>
                  <p className="text-sm text-slate-300">
                    Fortalece a capacidade das comunidades através de educação, cadastro de voluntários e redes de apoio
                    locais.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
