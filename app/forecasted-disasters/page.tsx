"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Mountain, Droplets, Clock, MapPin, Users, Phone } from "lucide-react"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const forecastData = [
  { time: "12:00", precipitation: 15, risk: 30 },
  { time: "15:00", precipitation: 45, risk: 60 },
  { time: "18:00", precipitation: 78, risk: 85 },
  { time: "21:00", precipitation: 92, risk: 95 },
  { time: "00:00", precipitation: 65, risk: 70 },
  { time: "03:00", precipitation: 35, risk: 45 },
]

const alerts = [
  {
    id: 1,
    type: "Enchente",
    location: "Petrópolis - RJ",
    severity: "Alto",
    time: "14:30",
    affected: 2500,
    icon: Droplets,
    color: "blue",
  },
  {
    id: 2,
    type: "Deslizamento",
    location: "Nova Friburgo - RJ",
    severity: "Crítico",
    time: "15:45",
    affected: 1200,
    icon: Mountain,
    color: "red",
  },
  {
    id: 3,
    type: "Enchente",
    location: "São Paulo - SP",
    severity: "Médio",
    time: "16:20",
    affected: 5000,
    icon: Droplets,
    color: "yellow",
  },
]

const emergencyContacts = [
  { name: "Defesa Civil Nacional", phone: "199" },
  { name: "Bombeiros", phone: "193" },
  { name: "SAMU", phone: "192" },
  { name: "Polícia Militar", phone: "190" },
]

export default function ForecastedDisasters() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-amber-400">Forecasted Disasters</h1>
            <p className="text-slate-400 mt-1">Previsões e alertas de desastres em tempo real</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="border-red-400 text-red-400 animate-pulse">
              <AlertTriangle className="w-3 h-3 mr-1" />3 Alertas Ativos
            </Badge>
          </div>
        </div>

        {/* Active Alerts */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-amber-400">Alertas Ativos</CardTitle>
            <CardDescription className="text-slate-400">
              Situações de risco identificadas que requerem atenção imediata
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`
                    p-4 rounded-lg border-l-4 bg-slate-700/50
                    ${alert.color === "red" ? "border-red-400" : ""}
                    ${alert.color === "yellow" ? "border-yellow-400" : ""}
                    ${alert.color === "blue" ? "border-blue-400" : ""}
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div
                        className={`
                        p-2 rounded-lg
                        ${alert.color === "red" ? "bg-red-900/30" : ""}
                        ${alert.color === "yellow" ? "bg-yellow-900/30" : ""}
                        ${alert.color === "blue" ? "bg-blue-900/30" : ""}
                      `}
                      >
                        <alert.icon
                          className={`
                          w-5 h-5
                          ${alert.color === "red" ? "text-red-400" : ""}
                          ${alert.color === "yellow" ? "text-yellow-400" : ""}
                          ${alert.color === "blue" ? "text-blue-400" : ""}
                        `}
                        />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-white">{alert.type}</h3>
                          <Badge
                            variant="outline"
                            className={`
                              ${alert.color === "red" ? "border-red-400 text-red-400" : ""}
                              ${alert.color === "yellow" ? "border-yellow-400 text-yellow-400" : ""}
                              ${alert.color === "blue" ? "border-blue-400 text-blue-400" : ""}
                            `}
                          >
                            {alert.severity}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-slate-300">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{alert.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{alert.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{alert.affected.toLocaleString()} pessoas afetadas</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-amber-400 text-amber-400 hover:bg-amber-400/10"
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Forecast Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Meteorological & Climate */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-amber-400">Meteorological & Climate</CardTitle>
              <CardDescription className="text-slate-400">
                Previsão de precipitação para as próximas 24h
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={forecastData}>
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
                  <Area
                    type="monotone"
                    dataKey="precipitation"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.3}
                    name="Precipitação (mm/h)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Risk Level Forecast */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-amber-400">Socioeconomic & Terrain</CardTitle>
              <CardDescription className="text-slate-400">
                Evolução do nível de risco nas próximas horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={forecastData}>
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
                  <Line type="monotone" dataKey="risk" stroke="#ef4444" strokeWidth={3} name="Nível de Risco (%)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Social Media & Open News */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-amber-400">Social Media & Open News</CardTitle>
              <CardDescription className="text-slate-400">Monitoramento de relatos em tempo real</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-slate-700/50 rounded-lg">
                  <p className="text-sm text-slate-300 mb-1">
                    <span className="font-medium text-white">@usuario123:</span> "Chuva muito forte aqui em Petrópolis,
                    rua já começando a alagar #enchente"
                  </p>
                  <p className="text-xs text-slate-400">há 15 minutos • Twitter</p>
                </div>
                <div className="p-3 bg-slate-700/50 rounded-lg">
                  <p className="text-sm text-slate-300 mb-1">
                    <span className="font-medium text-white">Portal G1:</span> "Defesa Civil emite alerta para chuvas
                    intensas na região serrana do RJ"
                  </p>
                  <p className="text-xs text-slate-400">há 32 minutos • Notícias</p>
                </div>
                <div className="p-3 bg-slate-700/50 rounded-lg">
                  <p className="text-sm text-slate-300 mb-1">
                    <span className="font-medium text-white">@moradorlocal:</span> "Sirene da Defesa Civil tocando aqui
                    no bairro, pessoal se preparando"
                  </p>
                  <p className="text-xs text-slate-400">há 45 minutos • Facebook</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-400">
                <Phone className="w-5 h-5" />
                <span>Contatos de Emergência</span>
              </CardTitle>
              <CardDescription className="text-slate-400">
                Números importantes para situações de emergência
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300">{contact.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-amber-400 font-mono font-bold">{contact.phone}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-amber-400 text-amber-400 hover:bg-amber-400/10"
                      >
                        Ligar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-red-900/20 border border-red-600/30 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <h4 className="font-medium text-red-400">Instruções de Emergência</h4>
                </div>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Mantenha-se em local seguro e elevado</li>
                  <li>• Evite áreas alagadas ou com risco de deslizamento</li>
                  <li>• Tenha sempre um kit de emergência preparado</li>
                  <li>• Siga as orientações da Defesa Civil</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
