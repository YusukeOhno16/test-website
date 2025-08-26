import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Code, Smartphone, Globe, Database, Shield, Zap } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "ウェブ開発",
      description: "モダンな技術スタックを使用した高品質なウェブアプリケーションの開発",
      features: ["React/Vue.js", "Node.js", "レスポンシブデザイン"]
    },
    {
      icon: Smartphone,
      title: "モバイルアプリ開発",
      description: "iOS・Android向けのネイティブ・クロスプラットフォームアプリ開発",
      features: ["React Native", "Flutter", "Swift/Kotlin"]
    },
    {
      icon: Globe,
      title: "デジタルマーケティング",
      description: "SEO対策からSNS運用まで、包括的なデジタルマーケティング支援",
      features: ["SEO最適化", "SNS運用", "広告運用"]
    },
    {
      icon: Database,
      title: "システム構築",
      description: "スケーラブルで安全なバックエンドシステムの設計・構築",
      features: ["クラウド構築", "API開発", "データベース設計"]
    },
    {
      icon: Shield,
      title: "セキュリティ対策",
      description: "企業の重要な情報資産を守る包括的なセキュリティソリューション",
      features: ["脆弱性診断", "セキュリティ監査", "対策実装"]
    },
    {
      icon: Zap,
      title: "コンサルティング",
      description: "DX推進やシステム最適化に関する専門的なコンサルティング",
      features: ["DX戦略", "業務改善", "技術選定"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            サービス
          </h2>
          <p className="text-xl text-muted-foreground">
            お客様のニーズに合わせた幅広いITサービスを提供しています。
            小規模なウェブサイトから大規模なシステム開発まで、
            あらゆる要件にお応えします。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  詳細を見る
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}