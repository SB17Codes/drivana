import "./globals.css";

export const metadata = {
  title: "Drivana | Votre voiture de France, accompagnée jusqu'en Algérie",
  description:
    "Drivana accompagne les résidents algériens dans l'achat sécurisé de véhicules en France: recherche, vérification, négociation, coordination export et assistance administrative.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
