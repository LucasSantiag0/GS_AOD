"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Cloud, Droplets, Users, MapPin, TrendingUp, Activity } from "lucide-react"

const meteorologicalData = [
  { month: "Jan", precipitation: 120, temperature: 25 },
  { month: "Fev", precipitation: 150, temperature: 26 },
  { month: "Mar", precipitation: 180, temperature: 24 },
  { month: "Abr", precipitation: 90, temperature: 22 },
  { month: "Mai", precipitation: 60, temperature: 20 },
  { month: "Jun", precipitation: 40, temperature: 18 },
]

const hydrologicalData = [
  { region: "Norte", floods: 45, level: "Alto" },
  { region: "Nordeste", floods: 23, level: "Médio" },
  { region: "Centro-Oeste", floods: 34, level: "Médio" },
  { region: "Sudeste", floods: 67, level: "Alto" },
  { region: "Sul", floods: 28, level: "Baixo" },
]

const socioeconomicData = [
  { indicator: "População Vulnerável", value: 8300000, unit: "pessoas" },
  { indicator: "Áreas de Risco", value: 1161, unit: "localidades" },
  { indicator: "Investimento Necessário", value: 2.87, unit: "bilhões R$" },
]

const geotechnicalData = [
  { type: "Encostas Instáveis", count: 445, risk: "Alto" },
  { type: "Solos Saturados", count: 234, risk: "Médio" },
  { type: "Áreas Críticas", count: 156, risk: "Crítico" },
]

const socialMediaData = [
  { platform: "Twitter", mentions: 1250, sentiment: "Negativo" },
  { platform: "Facebook", mentions: 890, sentiment: "Neutro" },
  { platform: "Instagram", mentions: 567, sentiment: "Positivo" },
]

const COLORS = ["#f59e0b", "#ef4444", "#3b82f6", "#10b981", "#8b5cf6"]

export default function DataDashboards() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-amber-400">Data Dashboards</h1>
            <p className="text-slate-400 mt-1">
              Análise integrada de dados meteorológicos, hidrológicos e socioeconômicos
            </p>
          </div>
          <Badge variant="outline" className="border-amber-400 text-amber-400">
            Atualizado em tempo real
          </Badge>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Meteorological & Climate */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-400">
                <Cloud className="w-5 h-5" />
                <span>Meteorological & Climate</span>
              </CardTitle>
              <CardDescription className="text-slate-400">Dados de precipitação e temperatura</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={meteorologicalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="precipitation"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    name="Precipitação (mm)"
                  />
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    name="Temperatura (°C)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Hydrological */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-400">
                <Droplets className="w-5 h-5" />
                <span>Hydrological</span>
              </CardTitle>
              <CardDescription className="text-slate-400">Dados de enchentes por região</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={hydrologicalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="region" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="floods" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Geotechnical & Terrain */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-400">
                <MapPin className="w-5 h-5" />
                <span>Geotechnical & Terrain</span>
              </CardTitle>
              <CardDescription className="text-slate-400">Análise de estabilidade do terreno</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {geotechnicalData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <div>
                      <p className="font-medium text-white">{item.type}</p>
                      <p className="text-sm text-slate-400">{item.count} ocorrências</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`
                        ${item.risk === "Alto" ? "border-yellow-400 text-yellow-400" : ""}
                        ${item.risk === "Médio" ? "border-blue-400 text-blue-400" : ""}
                        ${item.risk === "Crítico" ? "border-red-400 text-red-400" : ""}
                      `}
                    >
                      {item.risk}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Socioeconomic & Infrastructure */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-400">
                <Users className="w-5 h-5" />
                <span>Socioeconomic & Infrastructure</span>
              </CardTitle>
              <CardDescription className="text-slate-400">Indicadores socioeconômicos e infraestrutura</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {socioeconomicData.map((item, index) => (
                  <div key={index} className="p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-300">{item.indicator}</p>
                      <TrendingUp className="w-4 h-4 text-amber-400" />
                    </div>
                    <p className="text-2xl font-bold text-white mt-2">
                      {item.value.toLocaleString("pt-BR")} {item.unit}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Community-Crowdsourced */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-amber-400">Community-Crowdsourced</CardTitle>
              <CardDescription className="text-slate-400">Dados coletados pela comunidade</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <span className="text-slate-300">Relatos de Alagamento</span>
                  <span className="text-amber-400 font-semibold">127</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <span className="text-slate-300">Pontos de Risco Identificados</span>
                  <span className="text-amber-400 font-semibold">89</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <span className="text-slate-300">Voluntários Cadastrados</span>
                  <span className="text-amber-400 font-semibold">1.234</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media & Open News */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-400">
                <Activity className="w-5 h-5" />
                <span>Social Media & Open News</span>
              </CardTitle>
              <CardDescription className="text-slate-400">Monitoramento de mídias sociais</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {socialMediaData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <div>
                      <p className="font-medium text-white">{item.platform}</p>
                      <p className="text-sm text-slate-400">{item.mentions} menções</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`
                        ${item.sentiment === "Positivo" ? "border-green-400 text-green-400" : ""}
                        ${item.sentiment === "Neutro" ? "border-blue-400 text-blue-400" : ""}
                        ${item.sentiment === "Negativo" ? "border-red-400 text-red-400" : ""}
                      `}
                    >
                      {item.sentiment}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
