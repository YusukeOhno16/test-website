import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "電話",
      content: "03-1234-5678",
      description: "平日 9:00-18:00"
    },
    {
      icon: Mail,
      title: "メール",
      content: "info@example.com",
      description: "24時間受付"
    },
    {
      icon: MapPin,
      title: "住所",
      content: "東京都渋谷区○○1-2-3",
      description: "○○ビル 5F"
    },
    {
      icon: Clock,
      title: "営業時間",
      content: "月-金 9:00-18:00",
      description: "土日祝日は休業"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            お問い合わせ
          </h2>
          <p className="text-xl text-muted-foreground">
            ご質問やご相談がございましたら、お気軽にお問い合わせください。
            専門スタッフが丁寧にサポートいたします。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                連絡先情報
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{info.title}</h4>
                      <p className="text-sm text-foreground">{info.content}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                <span className="text-muted-foreground">地図</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>お問い合わせフォーム</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">お名前 *</label>
                  <Input placeholder="山田 太郎" />
                </div>
                <div>
                  <label className="block text-sm mb-2">会社名</label>
                  <Input placeholder="株式会社○○" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2">メールアドレス *</label>
                <Input type="email" placeholder="example@email.com" />
              </div>
              <div>
                <label className="block text-sm mb-2">電話番号</label>
                <Input placeholder="090-1234-5678" />
              </div>
              <div>
                <label className="block text-sm mb-2">お問い合わせ内容 *</label>
                <Textarea 
                  placeholder="お気軽にご質問やご相談内容をお聞かせください。" 
                  rows={5}
                />
              </div>
              <Button className="w-full">
                送信する
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}