import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "./components/Header/Index";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Cinelista",
  description: "Site para ver os filmes de cinema",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
