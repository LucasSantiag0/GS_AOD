"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Brain, Shield, Zap, Target, Play, FileText } from "lucide-react"

const modules = [
  {
    title: "Módulo de Prevenção e Mapeamento Dinâmico de Risco",
    description: "Base para ações preventivas e de planejamento utilizando ML e dados históricos",
    icon: MapPin,
    color: "blue",
    features: [
      "Coleta integrada de dados geográficos e históricos (CEMADEN, CPTEC/INMET, IBGE)",
      "Modelos de ML para prever deslizamentos e enchentes",
      "Mapeamento dinâmico de risco em tempo real",
      "Sistema de alertas automatizados",
      "Ferramenta de planejamento de evacuação",
      "Análise de vulnerabilidade social e infraestrutura",
    ],
    technologies: ["Random Forest", "Gradient Boosting", "LSTM", "PostGIS", "Leaflet/Mapbox"],
  },
  {
    title: "Módulo de Engajamento Comunitário e Educação",
    description: "Fortalecimento da capacidade das comunidades através de educação e redes de apoio",
    icon: Users,
    color: "green",
    features: [
      "Conteúdo educativo sobre riscos locais específicos",
      "Medidas preventivas domiciliares e comunitárias",
      "Orientações para planos de evacuação familiares",
      "Cadastro de voluntários e redes de apoio",
      "Funcionalidades de crowdsourcing para relatos",
      "Comunicação bidirecional com autoridades",
    ],
    technologies: ["React Native", "Firebase", "WhatsApp API", "Push Notifications"],
  },
]

const innovations = [
  {
    title: "Hiperlocalização e Personalização",
    description: "Alertas específicos para ruas e bairros, não apenas cidades",
    icon: Target,
  },
  {
    title: "Integração de Dados Multidimensionais",
    description: "Fusão de dados oficiais, sensores IoT e crowdsourcing",
    icon: Brain,
  },
  {
    title: "Cadeia Completa P-A-R",
    description: "Prevenção, Alerta e Resposta integrados em uma única plataforma",
    icon: Shield,
  },
  {
    title: "Aprendizado Contínuo",
    description: "IA que se adapta e melhora com cada novo evento",
    icon: Zap,
  },
]

const deliverables = [
  {
    title: "Documento PDF - Proposta Executiva",
    description: "Documento completo com análise do problema, solução proposta e arquitetura técnica",
    icon: FileText,
    status: "Concluído",
  },
  {
    title: "Vídeo Pitch de Apresentação",
    description: "Apresentação de 5 minutos demonstrando a solução e seus benefícios",
    icon: Play,
    status: "Em Produção",
  },
]

export default function Solution() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-amber-400">Solução Proposta</h1>
            <p className="text-slate-400 mt-1">
              Sistema integrado de prevenção e gestão de riscos de desastres naturais
            </p>
          </div>
          <Badge variant="outline" className="border-amber-400 text-amber-400">
            AttackOnData
          </Badge>
        </div>

        {/* Problem Statement */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-amber-400">Cenário Atual e Problema</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-white mb-3">Situação Crítica</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Brasil atingiu recorde de 1.161 desastres naturais em 2023</li>
                  <li>• 132 mortes e 9.263 pessoas feridas/enfermas</li>
                  <li>• 608.650 pessoas desabrigadas/desalojadas</li>
                  <li>• Prejuízos econômicos de R$ 15,64 bilhões</li>
                  <li>• 8,3 milhões de brasileiros em áreas de risco</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Deficiências Sistêmicas</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Prevenção deficitária e alertas ineficazes</li>
                  <li>• Resposta comprometida por falta de coordenação</li>
                  <li>• Baixa percepção de risco nas comunidades</li>
                  <li>• Falta de integração entre dados e sistemas</li>
                  <li>• Vulnerabilidade concentrada em populações pobres</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Solution Modules */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Módulos da Solução</h2>

          {modules.map((module, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-amber-400">
                  <div
                    className={`
                    p-2 rounded-lg
                    ${module.color === "blue" ? "bg-blue-900/30" : ""}
                    ${module.color === "green" ? "bg-green-900/30" : ""}
                  `}
                  >
                    <module.icon
                      className={`
                      w-5 h-5
                      ${module.color === "blue" ? "text-blue-400" : ""}
                      ${module.color === "green" ? "text-green-400" : ""}
                    `}
                    />
                  </div>
                  <span>{module.title}</span>
                </CardTitle>
                <CardDescription className="text-slate-400">{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-white mb-3">Funcionalidades Principais</h4>
                    <ul className="space-y-2">
                      {module.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-3">Tecnologias Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-slate-600 text-slate-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovation Differentials */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-amber-400">Inovação e Diferenciais</CardTitle>
            <CardDescription className="text-slate-400">
              Características que distinguem nossa solução das existentes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {innovations.map((innovation, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-slate-700/50 rounded-lg">
                  <div className="p-2 rounded-lg bg-amber-900/30">
                    <innovation.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{innovation.title}</h4>
                    <p className="text-sm text-slate-300">{innovation.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Comparative Analysis */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-amber-400">Análise Comparativa</CardTitle>
            <CardDescription className="text-slate-400">
              Como nossa solução se diferencia das existentes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-slate-300">Característica</th>
                    <th className="text-left p-3 text-slate-300">CEMADEN</th>
                    <th className="text-left p-3 text-slate-300">Google Flood Hub</th>
                    <th className="text-left p-3 text-amber-400">Nossa Solução</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700/50">
                    <td className="p-3 font-medium">Nível de Alerta</td>
                    <td className="p-3">Nacional/Estadual</td>
                    <td className="p-3">Regional</td>
                    <td className="p-3 text-amber-400">Hiperlocal (bairro/rua)</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="p-3 font-medium">Engajamento Comunitário</td>
                    <td className="p-3">Limitado</td>
                    <td className="p-3">Inexistente</td>
                    <td className="p-3 text-amber-400">Ativo e Bidirecional</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="p-3 font-medium">Cadeia P-A-R</td>
                    <td className="p-3">Principalmente Alerta</td>
                    <td className="p-3">Previsão/Alerta</td>
                    <td className="p-3 text-amber-400">Integrado Completo</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Aprendizado de IA</td>
                    <td className="p-3">Modelos estabelecidos</td>
                    <td className="p-3">IA para previsão</td>
                    <td className="p-3 text-amber-400">Aprendizado contínuo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Deliverables */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-amber-400">Principais Entregáveis</CardTitle>
            <CardDescription className="text-slate-400">Documentação e apresentação do projeto</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-slate-700/50 rounded-lg">
                  <div className="p-2 rounded-lg bg-amber-900/30">
                    <deliverable.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{deliverable.title}</h4>
                      <Badge
                        variant="outline"
                        className={`
                          ${deliverable.status === "Concluído" ? "border-green-400 text-green-400" : "border-yellow-400 text-yellow-400"}
                        `}
                      >
                        {deliverable.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-300">{deliverable.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-amber-400">Conclusão do Projeto</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 leading-relaxed mb-4">
              A solução proposta representa uma abordagem inovadora e integrada para a gestão de riscos de desastres
              naturais no Brasil. Através da combinação de tecnologias avançadas de Data Science, Machine Learning e
              engajamento comunitário, o projeto tem potencial para transformar significativamente a capacidade de
              prevenção, alerta e resposta a eventos extremos.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              A principal inovação reside na integração sinérgica de múltiplas fontes de dados e funcionalidades, com
              foco na usabilidade e acionabilidade das informações para comunidades vulneráveis e agentes da Defesa
              Civil. O sistema preenche a lacuna crítica da "última milha" na comunicação de riscos, oferecendo alertas
              hiperlocais e ferramentas de resposta coordenada.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-amber-600 hover:bg-amber-700">
                <Play className="w-4 h-4 mr-2" />
                Assistir Pitch
              </Button>
              <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400/10">
                <FileText className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
