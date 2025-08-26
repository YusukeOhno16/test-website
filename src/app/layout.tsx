import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "../styles/globals.css";
import "./figma-styles.css";

export const metadata = {
  title: '株式会社サンプル - 未来を創るイノベーション',
  description: '最新の技術とクリエイティブなアイデアで、お客様のビジネスを次のレベルへと導きます。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}