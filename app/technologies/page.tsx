"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Cloud, Cpu, Smartphone, Globe, Zap, Brain, BarChart3 } from "lucide-react"

const dataSourcesCategories = [
  {
    title: "Dados Meteorológicos e Climáticos",
    icon: Cloud,
    color: "blue",
    sources: [
      { name: "INPE/CPTEC", description: "Previsões de tempo e modelos numéricos de atmosfera" },
      { name: "CEMADEN", description: "Alertas de chuvas intensas e rede de monitoramento" },
      { name: "NASA Earth Data", description: "Dados globais de observação da Terra via satélite" },
    ],
  },
  {
    title: "Dados Hidrológicos",
    icon: Database,
    color: "cyan",
    sources: [
      { name: "ANA", description: "Rede Hidrometeorológica Nacional - níveis e vazão de rios" },
      { name: "Sensores IoT", description: "Rede complementar em bacias hidrográficas urbanas" },
    ],
  },
  {
    title: "Dados Geotécnicos e de Terreno",
    icon: BarChart3,
    color: "green",
    sources: [
      { name: "SGB/CPRM", description: "Mapas de suscetibilidade a movimentos de massa" },
      { name: "Modelos Digitais de Elevação", description: "SRTM, ALOS PALSAR para análises de declividade" },
      { name: "Sensores de Umidade do Solo", description: "Monitoramento em tempo real de encostas críticas" },
    ],
  },
  {
    title: "Dados Socioeconômicos",
    icon: Globe,
    color: "purple",
    sources: [
      { name: "IBGE", description: "Dados demográficos, renda, escolaridade e condições de moradia" },
      { name: "Prefeituras Municipais", description: "Cadastros imobiliários e infraestrutura urbana" },
    ],
  },
]

const technologies = [
  {
    category: "Machine Learning & IA",
    icon: Brain,
    color: "amber",
    items: [
      "Random Forest e Gradient Boosting para classificação de risco",
      "Redes Neurais LSTM para previsão temporal de chuvas",
      "Processamento de Linguagem Natural (NLP) para mídias sociais",
      "Sistemas de Recomendação para otimização de recursos",
    ],
  },
  {
    category: "Infraestrutura Cloud",
    icon: Cloud,
    color: "blue",
    items: [
      "AWS/Azure/GCP para escalabilidade e alta disponibilidade",
      "PostGIS sobre PostgreSQL para dados geoespaciais",
      "MongoDB/Cassandra para dados não estruturados",
      "APIs RESTful para integração entre sistemas",
    ],
  },
  {
    category: "Desenvolvimento de Aplicações",
    icon: Smartphone,
    color: "green",
    items: [
      "Python para Data Science e backend (Pandas, NumPy, Scikit-learn)",
      "React/Angular/Vue.js para plataforma web responsiva",
      "React Native/Flutter para aplicativo móvel híbrido",
      "Apache NiFi/Airflow para ETL automatizado",
    ],
  },
  {
    category: "Processamento de Dados",
    icon: Cpu,
    color: "red",
    items: [
      "Apache Spark para Big Data Analytics",
      "Apache Kafka para streaming de dados em tempo real",
      "TensorFlow/PyTorch para modelos de Deep Learning",
      "Elasticsearch para busca e análise de logs",
    ],
  },
]

export default function Technologies() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-amber-400">Tecnologias Necessárias</h1>
            <p className="text-slate-400 mt-1">Stack tecnológico para implementação da solução</p>
          </div>
          <Badge variant="outline" className="border-amber-400 text-amber-400">
            Data Science & IA
          </Badge>
        </div>

        {/* Data Sources */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Fontes de Dados</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dataSourcesCategories.map((category, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-amber-400">
                    <div
                      className={`
                      p-2 rounded-lg
                      ${category.color === "blue" ? "bg-blue-900/30" : ""}
                      ${category.color === "cyan" ? "bg-cyan-900/30" : ""}
                      ${category.color === "green" ? "bg-green-900/30" : ""}
                      ${category.color === "purple" ? "bg-purple-900/30" : ""}
                    `}
                    >
                      <category.icon
                        className={`
                        w-5 h-5
                        ${category.color === "blue" ? "text-blue-400" : ""}
                        ${category.color === "cyan" ? "text-cyan-400" : ""}
                        ${category.color === "green" ? "text-green-400" : ""}
                        ${category.color === "purple" ? "text-purple-400" : ""}
                      `}
                      />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.sources.map((source, sourceIndex) => (
                      <div key={sourceIndex} className="p-3 bg-slate-700/50 rounded-lg">
                        <h4 className="font-medium text-white mb-1">{source.name}</h4>
                        <p className="text-sm text-slate-300">{source.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Stack Tecnológico</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-amber-400">
                    <div
                      className={`
                      p-2 rounded-lg
                      ${tech.color === "amber" ? "bg-amber-900/30" : ""}
                      ${tech.color === "blue" ? "bg-blue-900/30" : ""}
                      ${tech.color === "green" ? "bg-green-900/30" : ""}
                      ${tech.color === "red" ? "bg-red-900/30" : ""}
                    `}
                    >
                      <tech.icon
                        className={`
                        w-5 h-5
                        ${tech.color === "amber" ? "text-amber-400" : ""}
                        ${tech.color === "blue" ? "text-blue-400" : ""}
                        ${tech.color === "green" ? "text-green-400" : ""}
                        ${tech.color === "red" ? "text-red-400" : ""}
                      `}
                      />
                    </div>
                    <span>{tech.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Architecture Overview */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-amber-400">
              <Zap className="w-5 h-5" />
              <span>Arquitetura da Solução</span>
            </CardTitle>
            <CardDescription className="text-slate-400">
              Visão geral da arquitetura tecnológica integrada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-white">Camada de Dados</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-blue-900/20 border border-blue-600/30 rounded-lg">
                    <p className="text-sm text-blue-400 font-medium">Ingestão</p>
                    <p className="text-xs text-slate-300">APIs, Sensores IoT, Crowdsourcing</p>
                  </div>
                  <div className="p-3 bg-green-900/20 border border-green-600/30 rounded-lg">
                    <p className="text-sm text-green-400 font-medium">Armazenamento</p>
                    <p className="text-xs text-slate-300">PostGIS, MongoDB, Data Lake</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-white">Camada de Processamento</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-amber-900/20 border border-amber-600/30 rounded-lg">
                    <p className="text-sm text-amber-400 font-medium">ML/IA</p>
                    <p className="text-xs text-slate-300">Modelos Preditivos, NLP, Otimização</p>
                  </div>
                  <div className="p-3 bg-purple-900/20 border border-purple-600/30 rounded-lg">
                    <p className="text-sm text-purple-400 font-medium">Analytics</p>
                    <p className="text-xs text-slate-300">Spark, Kafka, Real-time Processing</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-white">Camada de Aplicação</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-red-900/20 border border-red-600/30 rounded-lg">
                    <p className="text-sm text-red-400 font-medium">Web Dashboard</p>
                    <p className="text-xs text-slate-300">React, Mapbox, Dashboards</p>
                  </div>
                  <div className="p-3 bg-cyan-900/20 border border-cyan-600/30 rounded-lg">
                    <p className="text-sm text-cyan-400 font-medium">Mobile App</p>
                    <p className="text-xs text-slate-300">React Native, Push Notifications</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
              <h4 className="font-medium text-white mb-2">Princípios Arquiteturais</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                <div>
                  <p>
                    <strong className="text-amber-400">Escalabilidade:</strong> Arquitetura cloud-native para
                    crescimento horizontal
                  </p>
                  <p>
                    <strong className="text-amber-400">Resiliência:</strong> Redundância e failover automático
                  </p>
                </div>
                <div>
                  <p>
                    <strong className="text-amber-400">Tempo Real:</strong> Processamento de streaming para alertas
                    instantâneos
                  </p>
                  <p>
                    <strong className="text-amber-400">Interoperabilidade:</strong> APIs padronizadas para integração
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
