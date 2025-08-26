import { Button } from "../../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const navItems = [
    { name: "ホーム", href: "#home" },
    { name: "会社概要", href: "#about" },
    { name: "サービス", href: "#services" },
    { name: "お問い合わせ", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="figma-header-logo">
            <span className="text-primary-foreground font-bold text-lg">株</span>
          </div>
          <span className="font-semibold text-lg">株式会社サンプル</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="figma-nav-link"
            >
              {item.name}
            </a>
          ))}
          <button className="figma-button-primary">お問い合わせ</button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
              <Button className="mt-4">お問い合わせ</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}