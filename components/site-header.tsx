import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between space-x-4">
        <MainNav items={siteConfig.mainNav} />
        <div className="justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
