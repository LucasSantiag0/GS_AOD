"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingDown, Shield, Users, Building, Heart, Zap, Target, CheckCircle } from "lucide-react"

const impacts = [
  {
    title: "Redução de Mortes e Feridos",
    description: "Previsão precisa com ML para alertas antecipados em locais específicos",
    icon: Heart,
    color: "red",
    metrics: [
      { label: "Mortes em 2023", value: 132, target: 50, reduction: "62%" },
      { label: "Feridos/Enfermos", value: 9263, target: 3500, reduction: "62%" },
    ],
  },
  {
    title: "Redução da Frequência de Ocorrência",
    description: "Intervenções preventivas baseadas em evidências e mapas de risco",
    icon: TrendingDown,
    color: "green",
    metrics: [
      { label: "Desastres Hidrológicos", value: 716, target: 300, reduction: "58%" },
      { label: "Desastres Geológicos", value: 445, target: 200, reduction: "55%" },
    ],
  },
  {
    title: "Redução de Prejuízos Econômicos",
    description: "Prevenção e resposta mais eficaz reduzindo custos de reconstrução",
    icon: Building,
    color: "blue",
    metrics: [
      { label: "Prejuízos Totais (R$ bi)", value: 15.64, target: 6.0, reduction: "62%" },
      { label: "Danos Materiais (R$ bi)", value: 2.87, target: 1.2, reduction: "58%" },
    ],
  },
  {
    title: "Redução de Pessoas Afetadas",
    description: "Evacuações eficientes e alertas antecipados",
    icon: Users,
    color: "purple",
    metrics: [
      { label: "Desabrigados", value: 74787, target: 25000, reduction: "67%" },
      { label: "Desalojados", value: 524863, target: 200000, reduction: "62%" },
    ],
  },
]

const benefits = [
  {
    title: "Prevenção de Eventos Extremos",
    description: "Infraestrutura verde e drenos reforçados evitam que chuvas moderadas se tornem catastróficas",
    icon: Shield,
    items: [
      "Chuvas até 100mm/24h dissipadas sem enchentes graves",
      "Intervenções em encostas evitam deslizamentos até 200mm/24h",
      "Redução de eventos emergenciais menores",
    ],
  },
  {
    title: "Ações Comunitárias Coordenadas",
    description: "Moradores, voluntários e Defesa Civil atuam de forma sincronizada",
    icon: Users,
    items: [
      "Detecção precoce de fissuras e comunicação imediata",
      "Equipes de contenção emergencial mobilizadas rapidamente",
      "Impedimento de deslizamentos pequenos se tornarem maiores",
    ],
  },
  {
    title: "Comunidades Mais Resilientes",
    description: "Moradores informados e treinados com capacidade de resposta autônoma",
    icon: Heart,
    items: [
      "Reação autônoma a sinais iniciais de risco",
      "Medidas caseiras de proteção implementadas",
      "Redes de voluntariado e solidariedade fortalecidas",
    ],
  },
  {
    title: "Tomada de Decisão Baseada em Dados",
    description: "Gestores municipais com informações precisas para políticas públicas",
    icon: Target,
    items: [
      "Planos diretores mais seguros baseados em mapas de vulnerabilidade",
      "Priorização objetiva de investimentos em infraestrutura",
      "Planejamento orçamentário direcionado para zonas críticas",
    ],
  },
  {
    title: "Maior Confiança População-Governo",
    description: "Alertas hiperlocais geram credibilidade e transparência",
    icon: CheckCircle,
    items: [
      "Alertas específicos aumentam confiança e adesão",
      "Transparência nos dados fortalece accountability",
      "Melhoria na percepção de quem vive em áreas vulneráveis",
    ],
  },
  {
    title: "Melhoria Contínua do Sistema",
    description: "Cada evento alimenta o banco de dados refinando as predições",
    icon: Zap,
    items: [
      "Modelos de ML se adaptam a mudanças climáticas",
      "Sistema evolui com crescimento urbano",
      "Prevenção alinhada à realidade local em tempo real",
    ],
  },
]

export default function ImpactsBenefits() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-amber-400">Impactos e Benefícios</h1>
            <p className="text-slate-400 mt-1">Resultados esperados com a implementação da solução</p>
          </div>
          <Badge variant="outline" className="border-amber-400 text-amber-400">
            Prevenção & Redução de Impacto
          </Badge>
        </div>

        {/* Impacts Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Impactos Quantitativos Esperados</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {impacts.map((impact, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-amber-400">
                    <div
                      className={`
                      p-2 rounded-lg
                      ${impact.color === "red" ? "bg-red-900/30" : ""}
                      ${impact.color === "green" ? "bg-green-900/30" : ""}
                      ${impact.color === "blue" ? "bg-blue-900/30" : ""}
                      ${impact.color === "purple" ? "bg-purple-900/30" : ""}
                    `}
                    >
                      <impact.icon
                        className={`
                        w-5 h-5
                        ${impact.color === "red" ? "text-red-400" : ""}
                        ${impact.color === "green" ? "text-green-400" : ""}
                        ${impact.color === "blue" ? "text-blue-400" : ""}
                        ${impact.color === "purple" ? "text-purple-400" : ""}
                      `}
                      />
                    </div>
                    <span>{impact.title}</span>
                  </CardTitle>
                  <CardDescription className="text-slate-400">{impact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {impact.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">{metric.label}</span>
                          <Badge variant="outline" className="border-green-400 text-green-400">
                            -{metric.reduction}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs text-slate-400">
                            <span>Atual: {metric.value.toLocaleString("pt-BR")}</span>
                            <span>Meta: {metric.target.toLocaleString("pt-BR")}</span>
                          </div>
                          <Progress value={(metric.target / metric.value) * 100} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Benefícios Qualitativos</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-amber-400">
                    <div className="p-2 rounded-lg bg-amber-900/30">
                      <benefit.icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <span>{benefit.title}</span>
                  </CardTitle>
                  <CardDescription className="text-slate-400">{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-amber-400">Resumo dos Impactos</CardTitle>
            <CardDescription className="text-slate-400">Visão consolidada dos resultados esperados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-3xl font-bold text-red-400 mb-2">62%</div>
                <p className="text-sm text-slate-300">Redução de Mortes</p>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-3xl font-bold text-green-400 mb-2">58%</div>
                <p className="text-sm text-slate-300">Menos Desastres</p>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-3xl font-bold text-blue-400 mb-2">R$ 9,6bi</div>
                <p className="text-sm text-slate-300">Economia Anual</p>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-3xl font-bold text-purple-400 mb-2">400k</div>
                <p className="text-sm text-slate-300">Pessoas Protegidas</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-900/20 border border-amber-600/30 rounded-lg">
              <p className="text-amber-200 text-sm leading-relaxed">
                <strong>Impacto Transformador:</strong> A implementação da solução representa uma mudança paradigmática
                na gestão de riscos de desastres no Brasil, passando de um modelo reativo para um modelo preventivo e
                preditivo, com potencial de salvar centenas de vidas e economizar bilhões em prejuízos anuais.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
