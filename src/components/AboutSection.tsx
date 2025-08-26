import { Card, CardContent } from "./ui/card";
import { Users, Target, Lightbulb } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "ミッション",
      description: "技術を通じて社会の課題を解決し、より良い未来を創造する"
    },
    {
      icon: Lightbulb,
      title: "ビジョン",
      description: "革新的なソリューションで業界をリードする企業となる"
    },
    {
      icon: Users,
      title: "バリュー",
      description: "お客様第一、チームワーク、継続的な学習と成長"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            私たちについて
          </h2>
          <p className="text-xl text-muted-foreground">
            2010年の設立以来、私たちは常にお客様のニーズに応え、
            最高品質のサービスを提供し続けています。
            経験豊富なチームが、あなたのビジネスの成功をサポートします。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-sm">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              実績と信頼
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">プロジェクト完了</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">顧客満足度</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">13年</div>
                <div className="text-sm text-muted-foreground">実績</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">サポート体制</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden">
              {/* Placeholder for company image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                <span className="text-muted-foreground">会社画像</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}