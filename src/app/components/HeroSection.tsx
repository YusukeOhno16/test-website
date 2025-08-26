import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="home" className="figma-section-home flex items-center bg-gradient-to-br from-background to-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 figma-grid-gap items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="figma-hero-title font-bold">
                未来を創る
                <br />
                <span className="figma-primary-text">イノベーション</span>
              </h1>
              <p className="figma-hero-subtitle text-muted-foreground max-w-lg">
                私たちは最新の技術とクリエイティブなアイデアで、
                お客様のビジネスを次のレベルへと導きます。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                サービスを見る
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                会社概要
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/40 p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="イノベーションのイメージ"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}