import { Separator } from "./ui/separator";

export function Footer() {
  const links = {
    company: [
      { name: "会社概要", href: "#about" },
      { name: "サービス", href: "#services" },
      { name: "採用情報", href: "#careers" },
      { name: "ニュース", href: "#news" }
    ],
    support: [
      { name: "お問い合わせ", href: "#contact" },
      { name: "よくある質問", href: "#faq" },
      { name: "サポート", href: "#support" },
      { name: "料金", href: "#pricing" }
    ],
    legal: [
      { name: "プライバシーポリシー", href: "#privacy" },
      { name: "利用規約", href: "#terms" },
      { name: "特定商取引法", href: "#commerce" },
      { name: "サイトマップ", href: "#sitemap" }
    ]
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold">株</span>
              </div>
              <span className="font-medium">株式会社サンプル</span>
            </div>
            <p className="text-sm text-muted-foreground">
              技術とクリエイティビティで、
              未来を創造するパートナーとして
              お客様のビジネスを支援します。
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">会社情報</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">サポート</h4>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">法的情報</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 株式会社サンプル. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}