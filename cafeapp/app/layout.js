import "./globals.css";
import MainHeader from "@/components/main-header/main-header";
import MainHeaderBackground from "@/components/main-header/main-header-background";

export const metadata = {
  title: "Hakuna Matata",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-hidden">
        <MainHeaderBackground />
        <MainHeader />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
