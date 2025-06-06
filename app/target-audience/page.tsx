"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Shield, Building, User, MapPin } from "lucide-react"

const personas = [
  {
    id: 1,
    name: "Dona Maria Silva",
    age: 55,
    role: "Moradora de Comunidade Vulnerável",
    location: "Bairro da Esperança",
    icon: User,
    color: "blue",
    description: "Costureira e líder comunitária informal",
    challenges: [
      "Vive com medo constante durante chuvas fortes",
      "Informações genéricas e confusas sobre riscos",
      "Falta de planos de evacuação claros",
      "Sensação de abandono pelas autoridades",
    ],
    needs: [
      "Alertas antecipados e específicos para sua área",
      "Rotas de fuga seguras e abrigos próximos",
      "Instruções claras em linguagem simples",
      "Canal para reportar incidentes rapidamente",
    ],
  },
  {
    id: 2,
    name: "Carlos Almeida",
    age: 38,
    role: "Agente da Defesa Civil Municipal",
    location: "COMPDEC Municipal",
    icon: Shield,
    color: "green",
    description: "Coordenador da Defesa Civil com equipe reduzida",
    challenges: [
      "Falta de dados integrados em tempo real",
      "Dificuldade em traduzir previsões em ações locais",
      "Comunicação complexa durante crises",
      "Recursos limitados para monitoramento",
    ],
    needs: [
      "Dashboard centralizado com dados em tempo real",
      "Ferramentas ágeis para emitir alertas direcionados",
      "Informações georreferenciadas para evacuações",
      "Suporte para coordenação com outras secretarias",
    ],
  },
  {
    id: 3,
    name: "Ana Pereira",
    age: 45,
    role: "Gestora Pública Municipal",
    location: "Prefeitura Municipal",
    icon: Building,
    color: "purple",
    description: "Prefeita em primeiro mandato",
    challenges: [
      "Impacto devastador dos desastres no orçamento",
      "Pressão por resultados rápidos e eficazes",
      "Falta de integração entre planejamento urbano e gestão de riscos",
      "Responsabilidade legal em casos de negligência",
    ],
    needs: [
      "Informações estratégicas para planejamento de longo prazo",
      "Ferramentas para monitorar eficácia dos investimentos",
      "Simulação de cenários para tomada de decisão",
      "Dados para fundamentar pedidos de recursos",
    ],
  },
]

const secondaryAudience = [
  {
    title: "Líderes Comunitários e ONGs",
    description: "Multiplicadores de informação e organizadores de ações preventivas locais",
    icon: Users,
    color: "amber",
  },
  {
    title: "Pesquisadores e Instituições Acadêmicas",
    description: "Utilizam dados da plataforma para estudos científicos sobre eventos extremos",
    icon: Heart,
    color: "pink",
  },
  {
    title: "Empresas de Infraestrutura",
    description: "Planejamento de operações e proteção de ativos baseado em informações de risco",
    icon: Building,
    color: "indigo",
  },
]

export default function TargetAudience() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-amber-400">Público-Alvo</h1>
            <p className="text-slate-400 mt-1">Personas e necessidades dos usuários da plataforma</p>
          </div>
          <Badge variant="outline" className="border-amber-400 text-amber-400">
            3 Personas Principais
          </Badge>
        </div>

        {/* Primary Personas */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Personas Principais</h2>

          {personas.map((persona) => (
            <Card key={persona.id} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div
                    className={`
                    p-3 rounded-lg
                    ${persona.color === "blue" ? "bg-blue-900/30" : ""}
                    ${persona.color === "green" ? "bg-green-900/30" : ""}
                    ${persona.color === "purple" ? "bg-purple-900/30" : ""}
                  `}
                  >
                    <persona.icon
                      className={`
                      w-6 h-6
                      ${persona.color === "blue" ? "text-blue-400" : ""}
                      ${persona.color === "green" ? "text-green-400" : ""}
                      ${persona.color === "purple" ? "text-purple-400" : ""}
                    `}
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-amber-400">{persona.name}</CardTitle>
                    <CardDescription className="text-slate-400 mt-1">
                      {persona.age} anos • {persona.role}
                    </CardDescription>
                    <div className="flex items-center space-x-2 mt-2">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-400">{persona.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6">{persona.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Challenges */}
                  <div>
                    <h4 className="font-semibold text-red-400 mb-3 flex items-center space-x-2">
                      <span>Desafios/Dores</span>
                    </h4>
                    <ul className="space-y-2">
                      {persona.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-slate-300">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Needs */}
                  <div>
                    <h4 className="font-semibold text-green-400 mb-3 flex items-center space-x-2">
                      <span>Necessidades/Expectativas</span>
                    </h4>
                    <ul className="space-y-2">
                      {persona.needs.map((need, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-slate-300">{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary Audience */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Público Secundário</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryAudience.map((audience, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`
                      p-2 rounded-lg
                      ${audience.color === "amber" ? "bg-amber-900/30" : ""}
                      ${audience.color === "pink" ? "bg-pink-900/30" : ""}
                      ${audience.color === "indigo" ? "bg-indigo-900/30" : ""}
                    `}
                    >
                      <audience.icon
                        className={`
                        w-5 h-5
                        ${audience.color === "amber" ? "text-amber-400" : ""}
                        ${audience.color === "pink" ? "text-pink-400" : ""}
                        ${audience.color === "indigo" ? "text-indigo-400" : ""}
                      `}
                      />
                    </div>
                    <CardTitle className="text-amber-400 text-lg">{audience.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integration Message */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-amber-400">Integração e Sinergia</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 leading-relaxed">
              O sucesso da plataforma depende intrinsecamente da adoção e do uso eficaz por todos os segmentos do
              público-alvo. Um alerta tecnicamente preciso gerado pela plataforma e enviado para a Defesa Civil (Carlos)
              só se traduzirá em vidas salvas se a comunidade (representada por Dona Maria) confiar nesse alerta,
              compreender a mensagem e souber como agir de forma segura. Isso, por sua vez, depende de um trabalho
              prévio de educação e engajamento, e do apoio político e de recursos da gestão municipal (Prefeita Ana)
              para que os planos de evacuação e os abrigos sejam funcionais.
            </p>
            <div className="mt-4 p-4 bg-amber-900/20 border border-amber-600/30 rounded-lg">
              <p className="text-amber-200 text-sm">
                <strong>Princípio Fundamental:</strong> Uma falha em qualquer um desses elos da cadeia compromete o
                resultado final. A solução deve ser desenhada com interfaces, funcionalidades e linguagens adaptadas às
                especificidades de cada perfil de usuário, garantindo ao mesmo tempo uma operação integrada e sinérgica
                entre eles.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
