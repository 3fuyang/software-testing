import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { ChevronRight, Gamepad, Paperclip, TestTube2 } from 'lucide-react'
import { useDarkMode } from 'usehooks-ts'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible'
import { Label } from './ui/label'
import { Switch } from './ui/switch'

const items = [
  {
    title: '课程练习',
    icon: Gamepad,
    children: [
      {
        title: '判断三角形类型',
        url: '/homework/triangle-judge',
      },
      {
        title: '万年历问题',
        url: '/homework/calendar-problem',
      },
      {
        title: '电脑销售系统',
        url: '/homework/computer-selling',
      },
      {
        title: '电信收费系统',
        url: '/homework/telecom-system',
      },
    ],
  },
  {
    title: '期末项目',
    icon: Paperclip,
    children: [
      {
        title: '单元测试',
        url: '/final-project/unit-testing',
      },
      {
        title: '集成测试',
        url: '/final-project/integration-testing',
      },
      {
        title: '系统测试',
        url: '/final-project/system-testing',
      },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Version />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <Collapsible
                  key={item.title}
                  title={item.title}
                  defaultOpen
                  className="group/collapsible"
                >
                  <SidebarGroup>
                    <SidebarGroupLabel
                      asChild
                      className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      <CollapsibleTrigger>
                        {item.icon && <item.icon className="mr-2" />}
                        {item.title}{' '}
                        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </CollapsibleTrigger>
                    </SidebarGroupLabel>
                    <CollapsibleContent>
                      <SidebarGroupContent>
                        <SidebarMenu className="pl-6">
                          {item.children.map((item) => (
                            <SidebarMenuItem key={item.title}>
                              <SidebarMenuButton asChild>
                                <a href={item.url}>{item.title}</a>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </CollapsibleContent>
                  </SidebarGroup>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center justify-center space-x-2">
          <ThemeSwitch />
          <Label htmlFor="theme-preference">昼/夜</Label>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

function ThemeSwitch() {
  const { isDarkMode, toggle } = useDarkMode()

  return (
    <Switch
      id="theme-preference"
      checked={isDarkMode}
      onCheckedChange={toggle}
    />
  )
}

function Version() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          asChild
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <a href="/">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <TestTube2 className="size-4" />
            </div>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-semibold">Libre Testing</span>
              <span>v1.0.0</span>
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
