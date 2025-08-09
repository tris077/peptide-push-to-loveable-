import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  BookOpen, 
  Calculator,
  Info, 
  Mail,
  Sparkles,
  Beaker
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Directory", url: "/", icon: Home },
  { title: "Prerequisites", url: "/prerequisites", icon: BookOpen },
  { title: "Fundamentals", url: "/fundamentals", icon: Calculator },
  { title: "About", url: "/about", icon: Info },
  { title: "Contact", url: "/contact", icon: Mail },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = (isActive: boolean) =>
    isActive 
      ? "bg-white/20 text-white font-semibold border-r-2 border-cyan-400" 
      : "text-slate-300 hover:bg-white/10 hover:text-white";

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} border-r border-white/10 bg-slate-900/95 backdrop-blur-xl transition-all duration-300`}
      variant="sidebar"
      collapsible="icon"
    >
      <SidebarContent>
        {/* Logo Section */}
        <div className="p-4 border-b border-white/10">
          <NavLink 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            {!collapsed && (
              <span className="text-xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                Peplike
              </span>
            )}
          </NavLink>
        </div>

        {/* Navigation Items */}
        <SidebarGroup className="px-2 py-4">
          <SidebarGroupLabel className={`text-slate-400 font-semibold ${collapsed ? "sr-only" : ""}`}>
            Navigation
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12">
                    <NavLink
                      to={item.url}
                      end
                      className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${getNavCls(isActive(item.url))}`}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Compound Research Section */}
        <SidebarGroup className="px-2 py-4 mt-auto border-t border-white/10">
          <SidebarGroupLabel className={`text-slate-400 font-semibold ${collapsed ? "sr-only" : ""}`}>
            Research
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <div className={`flex items-center gap-3 px-3 py-3 text-slate-400 ${collapsed ? "justify-center" : ""}`}>
                  <Beaker className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && (
                    <span className="text-sm">
                      Educational purposes only
                    </span>
                  )}
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}