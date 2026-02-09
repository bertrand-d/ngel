import "./globals.css";
import Header from "@/layout/Header";

export const metadata = {
  title: "NGEL",
  description: "NGEL - Votre specialiste PVC, ALU, Bois",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Header />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
