"use client"

import { Home, Settings, BarChart3, Map, Users, AlertTriangle, Target, Lightbulb } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Data Dashboards",
    url: "/data-dashboards",
    icon: BarChart3,
  },
  {
    title: "Forecasted Disasters",
    url: "/forecasted-disasters",
    icon: AlertTriangle,
  },
  {
    title: "Risk Maps",
    url: "/risk-maps",
    icon: Map,
  },
  {
    title: "Público-Alvo",
    url: "/target-audience",
    icon: Users,
  },
  {
    title: "Tecnologias",
    url: "/technologies",
    icon: Settings,
  },
  {
    title: "Impactos e Benefícios",
    url: "/impacts-benefits",
    icon: Target,
  },
  {
    title: "Solução Proposta",
    url: "/solution",
    icon: Lightbulb,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-slate-700">
      <SidebarHeader className="border-b border-slate-700 p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-slate-900" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-amber-400">AttackOnData</h2>
            <p className="text-xs text-slate-400">Disaster Risk Management</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400">Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="data-[active=true]:bg-amber-400/10 data-[active=true]:text-amber-400"
                  >
                    <Link href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-slate-700 p-4">
        <div className="text-xs text-slate-400">
          <p>© 2024 AttackOnData</p>
          <p>Sistema de Gestão de Riscos</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
