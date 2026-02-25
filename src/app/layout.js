import "./globals.css";
import Header from "@/layout/Header";

export const metadata = {
  title: "ngel-Paris",
  description: "Votre spécialiste PVC - ALU - BOIS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
