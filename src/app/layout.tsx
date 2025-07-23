import type { Metadata } from "next";
import "@/styles/globals.css";


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
      <body >
        {children}
      </body>
    </html>
  );
}
